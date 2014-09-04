/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Role'
], function (Role) {
    'use strict';

    var roleRouter = function (router) {
        router
            .route('/role/:id?')
            .get(function (req, res, next) {
                var id = req.param('id');

                Role
                    .findById(id)
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {

                            res.send(docs);
                        });
                    });
            })
            .post(function (req, res, next) {
                var role = new Role(req.body);

                role.save(function (err, product, numberAffected) {
                    router.cap(err, res, function () {

                        res.send(role);
                    });
                });
            })
            .put(function (req, res, next) {
                var form = req.body;

                Role.update({
                    _id: form._id
                }, {
                    name: form.name,
                    privilege: form.privilege,
                    note: form.note
                }, function (err, numberAffected, raw) {
                    router.cap(err, res, function () {

                        res.send(form);
                    });
                });
            })
            .delete(function (req, res, next) {

                var id = req.param('id');

                Role.remove({
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
    return roleRouter;
});

