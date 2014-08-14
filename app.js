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

], function (config, router, express, bodyParser, mongoose, log4js, morgan, compression, errorhandler) {
    'use strict';

    // TRACE, DEBUG, INFO, WARN, ERROR, FATAL
    var logger = log4js.getLogger('app'),
        app = express();

    switch (config.env()) {
        case 'debug':

            logger.setLevel('TRACE');

            app.use(morgan('short'));
            app.use(errorhandler());
            app.use(express.static('client'));

            break;
        case 'development':

            logger.setLevel('INFO');

            app.use(morgan('short'));
            app.use(errorhandler());
            app.use(express.static('client'));

            break;
        case 'production':

            logger.setLevel('ERROR');

            app.use(compression());
            app.use(express.static('dist'));

            break;

        default :

            logger.setLevel('WARN');
            app.use(express.static('client'));

            break;
    }

    app.use(bodyParser.json());
    app.use('/rest', router);

    var port = config.port();
    app.listen(port);
    logger.info('Http server listening on port ' + port);

    var mongooseLink = config.mongooseLink();
    mongoose.connect(mongooseLink);
    logger.info('Mongoose connect to ' + mongooseLink);

});




