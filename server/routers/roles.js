/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Role'
], function (Role) {
    'use strict';

    var rolesRouter = function (router) {
        router
            .route('/roles/count')
            .get(function (req, res, next) {

                Role
                    .count()
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {

                            res.send({
                                count: docs
                            });
                        });
                    });
            });

        router
            .route('/roles/:skip?/:limit?')
            .get(function (req, res, next) {
                var skip = req.param('skip') || 0;
                var limit = req.param('limit') || 100;
                Role
                    .find()
                    .skip(skip)
                    .limit(limit)
                    .sort({
                        _id: -1
                    })
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {

                            res.send(docs);
                        });
                    });
            });
    };
    return rolesRouter;
});

