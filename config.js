/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    // NODE_ENV
    function env(NODE_ENV) {
        return NODE_ENV === process.env.NODE_ENV;
    }

    // DataBase
    var db = {
        connect: 'mongodb://127.0.0.1/',
        name: '',
        auth: ''
    };

    // Cache
    var cache = {
        enable: false,
        server: '',
        port: '6379',
        auth: 'swift'
    };

    // Express listen port
    var port = 8000;

    if (env('development')) {

        db.connect = 'mongodb://server/';

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

