/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

require('requirejs')([
    'config',
    'express',
    'mongoose',
    'log4js',
    'morgan',
    'compression',
    'errorhandler'
], function (config, express, mongoose, log4js, morgan, compress, errorhandler) {
    'use strict';

    var app = express(),
        logger = log4js.getLogger('server');

    if (config.env('development')) {

        // Development

        app.use(morgan('short'));
        app.use(errorhandler());
        app.use(express.static('client'));

        logger.setLevel('DEBUG');

    } else if (config.env('production')) {

        // Production

        app.use(compress());
        app.use(express.static('client'));

        logger.setLevel('ERROR');

    } else {

        // Default

        app.use(morgan('short'));
        app.use(compress());
        app.use(express.static('client'));

        logger.setLevel('ERROR');
    }

    app.listen(config.port) &&
    logger.info('Http server listening on port ' + config.port);

});




