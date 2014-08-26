/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Comment'
], function (Comment) {
    'use strict';

    var commentsRouter = function (router, util) {
        router
            .route('/comments/count')
            .get(function (req, res, next) {

                Comment
                    .count()
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {
                            res.json({count: docs});
                        });
                    });
            });

        router
            .route('/comments/:skip?/:limit?')
            .get(function (req, res, next) {
                var skip = req.param('skip') || 0,
                    limit = req.param('limit') || 100;

                Comment
                    .find()
                    .skip(skip)
                    .limit(limit)
                    .sort({_id: -1})
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {
                            res.json(docs);
                        });
                    });
            });
    };

    return commentsRouter;
});