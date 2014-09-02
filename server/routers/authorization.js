/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'server/utilities/encrypt',
    'jsonwebtoken',
    'server/models/User'
], function (config, encrypt, jwt, User) {
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
                    .populate({
                        path: 'role',
                        select: '_id name privilege note'
                    })
                    .exec(function (err, docs) {

                        router.cap(err, res, function () {

                            if (docs.length === 0) {

                                res.status(401).send(config.ERR_MSG.nonexistentUser);

                            } else if (docs.length === 1) {

                                var user = docs[0];

                                if (user.password === encrypt.md5(encrypt.mixSalt(form.password, user.salt))) {
                                    // authorization success.
                                    var profile = {
                                            _id: user._id,
                                            clientIp: user.clientIp,
                                            createAt: user.createAt,
                                            email: user.email,
                                            loginAt: user.loginAt,
                                            role: user.role,
                                            username: user.username
                                        },
                                        token = jwt.sign(profile, config.jwt.secret, {
                                            algorithm: options.algorithm,
                                            issuer: options.issuer,
                                            audience: audience,
                                            expiresInMinutes: options.expiresInMinutes
                                        });

                                    User.update({
                                        _id: user._id
                                    }, {
                                        clientIp: req.ip,
                                        loginAt: Date.now()
                                    }, function (err, numberAffected, raw) {
                                        router.cap(err, res, function () {

                                            res.send({
                                                token: token,
                                                user: {
                                                    _id: user._id,
                                                    username: user.username,
                                                    email: user.email,
                                                    clientIp: user.clientIp,
                                                    createAt: user.createAt,
                                                    loginAt: user.loginAt,
                                                    role: user.role
                                                }
                                            });
                                        });
                                    });
                                } else {
                                    res.status(401).send(config.ERR_MSG.wrongPassword);
                                }
                            } else {
                                res.status(500).send(config.ERR_MSG.unknownErr);
                            }
                        });
                    });
            });
    };

    return authorizationRouter;
});
