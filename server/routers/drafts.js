/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Post',
    'server/models/Draft'
], function (Post, Draft) {
    'use strict';

    var draftsRouter = function (router) {
        router
            .route('/drafts/:postId/count')
            .get(function (req, res, next) {
                var postId = req.param('postId');

                Draft
                    .count({post: postId}, function (err, count) {
                        router.cap(err, res, function () {

                            res.send({
                                count: count
                            });
                        });
                    });
            });

        router
            .route('/drafts/:postId')
            .get(function (req, res, next) {
                var postId = req.param('postId'),
                    short = req.param('short'),
                    query;

                if (short) {
                    query = Draft
                        .find({post: postId}, '_id saveAt');
                } else {
                    query = Draft
                        .find({post: postId});
                }

                query
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {

                            res.send(docs);
                        });
                    });
            });
    };

    return draftsRouter;
});