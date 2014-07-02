/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

require('requirejs')([

    'config', // Project configuration.
    'server/router',
    'express', // Web application framework for node.
    'mongoose', // Elegant mongodb object modeling for node.js.
    'log4js', // Port of Log4js to work with node.
    'morgan', // Logging middleware for node.js http apps.
    'compression', // Node.js compression middleware.
    'errorhandler' // Create new middleware to handle errors and respond with content negotiation.

], function (config, router, express, mongoose, log4js, morgan, compress, errorhandler) {
    'use strict';

    var app = express(),
        logger = log4js.getLogger('server'); // TRACE, DEBUG, INFO, WARN, ERROR, FATAL

    if (config.env('development')) {

        // Development mode

        app.use(morgan('short'));
        app.use(errorhandler());
        app.use(express.static('client'));
        app.use('/api', router);

        logger.setLevel('DEBUG');

    } else if (config.env('production')) {

        // Production mode

        app.use(compress());
        app.use(express.static('client'));

        logger.setLevel('ERROR');

    } else {

        // Unknown mode

        app.use(morgan('short'));
        app.use(compress());
        app.use(express.static('client'));

        logger.setLevel('ERROR');
    }

    // Start Listening

    app.listen(config.port) &&
    logger.info('Http server listening on port ' + config.port);

});




