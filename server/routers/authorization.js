/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'server/utilities/all',
    'jsonwebtoken',
    'server/models/User'
], function (config, util, jwt, User) {
    'use strict';

    var options = config.jwt.options;

    var authorizationRouter = function (router) {

        router
            .route('/authorization')
            .post(function (req, res, next) {

                var form = req.body,
                    audience = req.ip + ' ' + req.header('user-agent');

                User
                    .find({
                        username: form.username
                    })
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {
                            if (docs.length === 0) {

                                res.status(401).json({status: 'nonexistent user'});

                            } else if (docs.length === 1) {

                                var user = docs[0];

                                if (user.password === util.md5(form.password)) {
                                    // authorization success.
                                    var profile = JSON.parse(JSON.stringify(user)),
                                        token = jwt.sign(profile, config.jwt.secret, {
                                            algorithm: options.algorithm,
                                            issuer: options.issuer,
                                            audience: audience,
                                            expiresInMinutes: options.expiresInMinutes
                                        });

                                    res.json({token: token});
                                } else {
                                    res.status(401).json({status: 'wrong password'});
                                }
                            } else {
                                res.status(500).json({status: 'failure'});
                            }
                        });
                    });
            });
    };

    return authorizationRouter;
});
