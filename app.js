/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

require('requirejs')([

    'config', // Project configuration.
    'server/routers/all',
    'express', // Web application framework for node.
    'body-parser', // Node.js body parsing middleware.
    'mongoose', // Elegant mongodb object modeling for node.js.
    'log4js', // Port of Log4js to work with node.
    'morgan', // Logging middleware for node.js http apps.
    'compression', // Node.js compression middleware.
    'errorhandler' // Create new middleware to handle errors and respond with content negotiation.

], function (config, router, express, bodyParser, mongoose, log4js, morgan, compress, errorhandler) {
    'use strict';

    var app = express(),
        logger = log4js.getLogger('app'); // TRACE, DEBUG, INFO, WARN, ERROR, FATAL

    mongoose.connect('mongodb://localhost/oglen-db');

    if (config.env('debug')) {

        // Development mode

        app.use(morgan('short'));
        app.use(errorhandler());
        app.use(express.static('client'));
        app.use(bodyParser.json());
        app.use('/rest', router);

        logger.setLevel('TRACE');

    } else if (config.env('development')) {

        // Development mode

        app.use(morgan('short'));
        app.use(errorhandler());
        app.use(express.static('client'));
        app.use(bodyParser.json());
        app.use('/rest', router);

        logger.setLevel('INFO');

    } else if (config.env('production')) {

        // Production mode

        app.use(compress());
        app.use(express.static('dist'));

        logger.setLevel('ERROR');

    }

    // Start Listening

    app.listen(config.port) &&
    logger.info('Http server listening on port ' + config.port);

});




