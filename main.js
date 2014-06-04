/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

var config = require('./config'),
    express = require('express'),
    mongoose = require('mongoose'),
    log4js = require('log4js'),
    morgan = require('morgan'),
    compress = require('compression'),
    errorhandler = require('errorhandler');


var app = express(),
    logger = log4js.getLogger('server');

if (config.env('development')) {

    // Development

    app.use(morgan());
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

var port = process.env.PORT || config.port;

app.listen(port) &&
logger.info('Http server listening on port ' + port);

