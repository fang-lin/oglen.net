/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Post',
    'server/models/Draft'
], function (Post, Draft) {
    'use strict';

    var postsRouter = function (router) {
        router
            .route('/posts/count')
            .get(function (req, res, next) {

                Post
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
            .route('/posts/:skip?/:limit?')
            .get(function (req, res, next) {
                var skip = req.param('skip') || 0;
                var limit = req.param('limit') || 100;
                Post
                    .find()
                    .skip(skip)
                    .limit(limit)
                    .sort({_id: -1})
                    .populate({
                        path: 'draft',
                        select: '_id post text saveAt flag'
                    })
                    .populate({
                        path: 'tags',
                        select: '_id name count'
                    })
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {

                            res.send(docs);
                        });
                    });
            });
    };
    return postsRouter;
});

