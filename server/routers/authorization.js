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

    var jwtConfig = config.jwt;
    var argotConfig = config.argot;

    var authorizationRouter = function (router) {

        function getUserProfile(user) {
            return {
                _id: user._id,
                username: user.username,
                email: user.email,
                clientIp: user.clientIp,
                createAt: user.createAt,
                loginAt: user.loginAt,
                role: user.role
            };
        }

        function jwtSign(user, audience) {
            var profile = getUserProfile(user);
            return jwt.sign(profile, jwtConfig.secret, {
                algorithm: jwtConfig.algorithm,
                issuer: jwtConfig.issuer,
                audience: audience,
                expiresInMinutes: jwtConfig.expiresInMinutes
            });
        }

        function updateUserAndSend(res, req, user, token, argot, cipher) {
            User.update({
                    _id: user._id
                }, {
                    clientIp: req.ip,
                    loginAt: Date.now(),
                    cipher: cipher
                }, function (err, numberAffected, raw) {
                    router.cap(err, res, function () {
                        res.send({
                            token: token,
                            user: getUserProfile(user),
                            argot: argot
                        });
                    });
                }
            );
        }

        function login(req, res, next) {
            var form = req.body;
            var audience = jwtConfig.audience(req);

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
                            var password = encrypt.md5(encrypt.mixSalt(form.password, user.salt));

                            if (user.password === password) {
                                // authorization success.

                                var token = jwtSign(user, audience);
                                var argot = null;
                                var cipher = null;

                                if (form.memorization) {
                                    argot = encrypt.randomBytes(64, 'utf8');
                                    cipher = encrypt.hash(argotConfig.algorithm, argotConfig.audience(argot, req));
                                }
                                updateUserAndSend(res, req, user, token, argot, cipher);
                            } else {
                                res.status(401).send(config.ERR_MSG.wrongPassword);
                            }
                        } else {
                            res.status(500).send(config.ERR_MSG.unknownErr);
                        }
                    });
                });
        }

        function toArgot(req, res, next) {
            var audience = jwtConfig.audience(req);
            var cipher = encrypt.hash(argotConfig.algorithm, argotConfig.audience(req.body.argot, req));
            User
                .find({
                    cipher: cipher
                })
                .populate({
                    path: 'role',
                    select: '_id name privilege note'
                })
                .exec(function (err, docs) {
                    if (docs.length === 0) {
                        res.status(401).send(config.ERR_MSG.nonexistentArgot);
                    } else if (docs.length === 1) {
                        // authorization success.

                        var user = docs[0];
                        var token = jwtSign(user, audience);
                        var argot = encrypt.randomBytes(64, 'utf8');
                        var cipher = encrypt.hash(argotConfig.algorithm, argotConfig.audience(argot, req));

                        updateUserAndSend(res, req, user, token, argot, cipher);
                    } else {
                        res.status(500).send(config.ERR_MSG.unknownErr);
                    }
                });
        }

        router
            .route('/authorization')
            .post(function (req, res, next) {
                var form = req.body;
                if (form.argot) {
                    toArgot(req, res, next);
                } else {
                    login(req, res, next);
                }
            });
    };
    return authorizationRouter;
});
