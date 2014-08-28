/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

require('requirejs')([

    'config', // Project configuration.
    'server/routers/all',
    'express', // Web application framework for node.
    'body-parser', // Node.js body parsing middleware.
    'morgan', // Logging middleware for node.js http apps.
    'compression', // Node.js compression middleware.
    'errorhandler', // Create new middleware to handle errors and respond with content negotiation.
    'mongoose', // Elegant mongodb object modeling for node.js.
    'log4js' // Port of Log4js to work with node.
], function (config, router, express, bodyParser, morgan, compression, errorhandler, mongoose, log4js) {
    'use strict';

    var logger = log4js.getLogger('app'),
        app = express(),
        env = config.env;

    env('development') && app.use(errorhandler());
    env('production') && app.use(compression());

    app.use(express.static(config.dist));
    app.use(morgan(config.morgan));
    logger.setLevel(config.logger);

    app.use('/rest', bodyParser.json());
    app.use('/rest', router);

    var port = config.port;
    app.listen(port);
    logger.info('Http server listening on port ' + port);

    var mongooseLink = config.mongooseLink;
    mongoose.connect(mongooseLink);
    logger.info('Mongoose connect to ' + mongooseLink);
});



