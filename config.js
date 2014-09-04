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
        };
    var logger = function () {
            return  loggers[env()] || loggers.default;
        };
    // morgan combined, common, dev, short, tiny
    var morgans = {
            default: 'short',
            development: 'dev',
            production: 'tiny'
        };
    var morgan = function () {
            return  morgans[env()] || morgans.default;
        };
    // static dist
    var dists = {
            default: 'client',
            development: 'client',
            production: 'dist'
        };
    var dist = function () {
            return  dists[env()] || dists.default;
        };
    // Express listening on port
    var ports = {
            default: 8080,
            development: 8000,
            production: 8080
        };
    var port = function () {
            return  process.env.PORT || ports[env()] || ports.default;
        };

    // mongoose connect link
    var mongooseLinks = {
            default: 'mongodb://localhost/oglen-db',
            development: 'mongodb://localhost/oglen-db',
            production: 'mongodb://localhost/oglen-db'
        };
    var mongooseLink = function () {
            return mongooseLinks[env()] || mongooseLinks.default;
        };

    // json web token
    var jwt = {
        secret: new Buffer('YOUR_CLIENT_SECRET', 'base64'),
        issuer: 'YOUR_ISSUER',
        expiresInMinutes: 0,
        audience: function (req) {
            var header = req.headers;
            return header['accept-language'] + ' ' + header['user-agent'];
        },
        argotExpiresInMinutes: 0,
        algorithm: 'HS256'
    };

    // argot
    var argot = {
        audience: function (argot, req) {
            return argot + jwt.secret + jwt.issuer + jwt.audience(req);
        },
        expiresInMinutes: 0,
        algorithm: 'sha512'
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
        nonexistentArgot: {
            code: 'not_authenticated',
            msg: 'Nonexistent Argot'
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
        argot: argot,
        delay: 0,
        ERR_MSG: ERR_MSG
    };
})
;

