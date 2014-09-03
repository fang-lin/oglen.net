/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/utilities/encrypt',
    'server/models/User'
], function (encrypt, User) {
    'use strict';

    var userRouter = function (router) {
        router
            .route('/user/:id?')
            .get(function (req, res, next) {

                var id = req.param('id');

                User
                    .findById(id)
                    .select('-password -salt')
                    .populate({
                        path: 'role',
                        select: '_id name privilege note'
                    })
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {
                            res.send(docs);
                        });
                    });
            })
            .post(function (req, res, next) {
                var form = req.body,
                    salt = encrypt.randomBytes(16),
                    password = encrypt.mixSalt(form.password, salt);

                form.password = encrypt.md5(password);
                form.salt = salt;

                var user = new User(form);

                user.save(function (err, product, numberAffected) {
                    router.cap(err, res, function () {
                        res.send(user);
                    });
                });
            })
            .put(function (req, res, next) {

                var form = req.body,
                    salt = encrypt.randomBytes(16),
                    password = encrypt.mixSalt(form.password, salt);

                form.password = encrypt.md5(password);
                form.salt = salt;

                User.update({
                    _id: form._id
                }, form, function (err, numberAffected, raw) {
                    router.cap(err, res, function () {
                        res.send(form);
                    });
                });
            })
            .delete(function (req, res, next) {

                var id = req.param('id');

                User.remove({
                    _id: id
                }, function (err, numberAffected, raw) {
                    router.cap(err, res, function () {
                        res.send({
                            _id: id
                        });
                    });
                });
            });

    };

    return userRouter;
});