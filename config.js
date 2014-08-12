/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    // Is NODE_ENV
    var env = function (NODE_ENV) {
        return (
            NODE_ENV ?
                NODE_ENV === process.env.NODE_ENV :
                process.env.NODE_ENV
            );
    };

    // Database
    var db = {
        connect: 'mongodb://localhost/',
        port: 27017,
        collection: '',
        auth: ''
    };

    // Cache
    var cache = {
        enable: false,
        server: '',
        port: '6379',
        auth: 'swift'
    };

    // Express listening on port
    var port = process.env.PORT || 8000;

    if (env('development')) {

        db.connect = 'mongodb://localhost/test';

    } else {

        cache.enable = false;
    }

    return {
        env: env,
        db: db,
        cache: cache,
        port: port
    };
});

