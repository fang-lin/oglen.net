/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/utilities/all',
    'server/models/User'
], function (util, User) {
    'use strict';

    var userRouter = function (router) {
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

                var form = req.body;
                form.password = util.md5(form.password);
                var user = new User(form);

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
                    password: util.md5(form.password),
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