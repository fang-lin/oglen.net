/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Post',
    'server/models/Draft'
], function (Post, Draft) {

    var postsRouter = function (router, util) {
        router
            .route('/posts')
            .get(function (req, res, next) {
                Post
                    .find()
                    .populate({
                        path: 'draft',
                        select: '_id post text saveAt flag'
                    })
                    .populate({
                        path: 'tags',
                        select: '_id name count'
                    })
                    .exec(function (err, docs) {
                        util.suit(err, function () {
                            res.json(docs);
                        });
                    });
            })
    };

    return postsRouter;

});

