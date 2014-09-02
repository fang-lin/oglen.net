/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Tag'
], function (Tag) {
    'use strict';

    var tagRouter = function (router) {
        router
            .route('/tag/:id?')
            .get(function (req, res, next) {
                var id = req.param('id');

                Tag
                    .findById(id)
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {

                            res.send(docs);
                        });
                    });
            })
            .post(function (req, res, next) {
                var tag = new Tag(req.body);

                tag.save(function (err, product, numberAffected) {
                    router.cap(err, res, function () {

                        res.send(tag);
                    });
                });
            })
            .put(function (req, res, next) {
                var form = req.body;

                Tag.update({
                    _id: form._id
                }, {
                    name: form.name
                }, function (err, numberAffected, raw) {
                    router.cap(err, res, function () {

                        res.send(form);
                    });
                });
            });
    };

    return tagRouter;
});

