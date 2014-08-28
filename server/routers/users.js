/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/User'
], function (User) {
    'use strict';

    var usersRouter = function (router) {
        router
            .route('/users/count')
            .get(function (req, res, next) {

                User
                    .count()
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {
                            res.json({count: docs});
                        });
                    });
            });

        router
            .route('/users/:skip?/:limit?')
            .get(function (req, res, next) {
                var skip = req.param('skip') || 0,
                    limit = req.param('limit') || 100;

                User
                    .find()
                    .skip(skip)
                    .limit(limit)
                    .sort({_id: -1})
                    .populate({
                        path: 'role',
                        select: '_id name'
                    })
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {
                            res.json(docs);
                        });
                    });
            });
    };

    return usersRouter;
});