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

    var authorizationRouter = function (router) {
        router
            .route('/authorization')
            .post(function (req, res, next) {

                var form = req.body;

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
                                    var token = jwt.sign({
                                        _id: user._id,
                                        username: user.username,
                                        email: user.email,
                                        role: user.role,
                                        clientIp: user.clientIp,
                                        loginAt: user.loginAt,
                                        createAt: user.createAt
                                    }, config.jwt.secret, config.jwt.options);

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
