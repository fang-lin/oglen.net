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

    // Cache
    var cache = {
        enable: false,
        server: '',
        port: '6379',
        auth: 'swift'
    };

    // Express listening on port
    var ports = {
            debug: 8000,
            development: 8000,
            production: 80,
            default: 80
        },
        port = function () {
            return  process.env.PORT || ports[env()] || ports.default;
        };

    // mongoose connect link
    var mongooseLinks = {
            debug: 'mongodb://localhost/oglen-db',
            development: 'mongodb://localhost/oglen-db',
            production: 'mongodb://localhost/oglen-db',
            default: 'mongodb://localhost/oglen-db'
        },
        mongooseLink = function () {
            return mongooseLinks[env()] || mongooseLinks.default;
        };

    return {
        env: env,
        port: port,
        mongooseLink: mongooseLink,
        delay: 500
    };
});

