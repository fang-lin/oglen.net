/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/User'
], function (User) {
    'use strict';

    var userRouter = function (router, util) {
        router
            .route('/user/:id?')
            .get(function (req, res, next) {
                var id = req.param('id');

                User
                    .findById(id)
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {
                            res.json(docs);
                        });
                    });
            })
            .post(function (req, res, next) {
                var user = new User(req.body);

                user.save(function (err, product, numberAffected) {
                    router.cap(err, res, function () {
                        res.json(user);
                    });
                });
            })
            .put(function (req, res, next) {
                var form = req.body;

                User.update({_id: form._id}, {
                    username: form.username,
                    email: form.email,
                    password: form.password,
                    role: form.role
                }, function (err, numberAffected, raw) {
                    router.cap(err, res, function () {
                        res.json(form);
                    });
                });
            });
    };

    return userRouter;

});