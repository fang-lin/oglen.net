/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Post',
    'server/models/Draft'
], function (Post, Draft) {

    var draftsRouter = function (router, util) {
        router
            .route('/drafts/:postId?')
            .get(function (req, res, next) {
                var postId = req.param('postId'),
                    short = req.param('short');

                var query;

                if (short) {
                    query = Draft
                        .find({post: postId}, '_id saveAt')
                } else {
                    query = Draft
                        .find({post: postId})
                }

                query.exec(function (err, docs) {
                    util.suit(err, function () {
                        res.json(docs);
                    });
                });
            })
    };

    return draftsRouter;
});