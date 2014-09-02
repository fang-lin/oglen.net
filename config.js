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

    // TRACE, DEBUG, INFO, WARN, ERROR, FATAL
    var loggers = {
            default: 'WARN',
            development: 'INFO',
            production: 'ERROR'
        },
        logger = function () {
            return  loggers[env()] || loggers.default;
        };

    // morgan combined, common, dev, short, tiny
    var morgans = {
            default: 'short',
            development: 'dev',
            production: 'tiny'
        },
        morgan = function () {
            return  morgans[env()] || morgans.default;
        };

    // static dist
    var dists = {
            default: 'client',
            development: 'client',
            production: 'dist'
        },
        dist = function () {
            return  dists[env()] || dists.default;
        };

    // Express listening on port
    var ports = {
            default: 8080,
            development: 8000,
            production: 8080
        },
        port = function () {
            return  process.env.PORT || ports[env()] || ports.default;
        };

    // mongoose connect link
    var mongooseLinks = {
            default: 'mongodb://localhost/oglen-db',
            development: 'mongodb://localhost/oglen-db',
            production: 'mongodb://localhost/oglen-db'
        },
        mongooseLink = function () {
            return mongooseLinks[env()] || mongooseLinks.default;
        };

    // json web token
    var jwt = {
        secret: new Buffer('YOUR_CLIENT_SECRET', 'base64'),
        options: {
            algorithm: 'HS256',
            issuer: 'YOUR_ISSUER',
            expiresInMinutes: .1
        }
    };

    // api messages
    var ERR_MSG = {
        nonexistentUser: {
            code: 'not_authenticated',
            msg: 'Nonexistent User'
        },
        wrongPassword: {
            code: 'not_authenticated',
            msg: 'Wrong Password'
        },
        unknownErr: {
            code: ' unknown',
            msg: 'Unknown Error'
        }
    };

    return {
        env: env,
        logger: logger(),
        morgan: morgan(),
        dist: dist(),
        port: port(),
        mongooseLink: mongooseLink(),
        jwt: jwt,
        delay: 1000,
        ERR_MSG: ERR_MSG
    };
})
;

