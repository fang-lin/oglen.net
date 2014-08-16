/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Post',
    'server/models/Draft'
], function (Post, Draft) {

    var postRouter = function (router, util) {
        router
            .route('/post/:id?')
            .get(function (req, res, next) {
                var id = req.param('id');

                Post
                    .findById(id)
                    .populate({
                        path: 'draft',
                        select: '_id text saveAt flag'
                    })
                    .exec(function (err, docs) {
                        util.suit(err, function () {
                            res.json(docs);
                        });
                    });
            })
            .post(function (req, res, next) {

                var form = req.body,

                    post = new Post({
                        title: form.title,
                        abstract: form.abstract,
                        author: form.author,
                        tags: form.tags,
                        publish: form.publish,
                        hidden: form.hidden
                    });

                post.save(function (err, product, numberAffected) {
                    util.suit(err, function () {
                        var draft = new Draft({
                            post: post._id,
                            text: form.draft.text
                        });

                        draft.save(function (err, product, numberAffected) {
                            util.suit(err, function () {
                                Post.update({_id: post._id}, {draft: draft._id}, function (err, numberAffected, raw) {
                                    util.suit(err, function () {
                                        res.json({
                                            _id: post._id,
                                            draft: {
                                                _id: draft._id,
                                                saveAt: draft.saveAt
                                            },
                                            createAt: post.createAt
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            })
            .put(function (req, res, next) {
                var form = req.body,

                    draft = new Draft({
                        post: form._id,
                        text: form.draft.text,
                        flag: 'draft'
                    });

                draft.save(function (err, product, numberAffected) {
                    util.suit(err, function () {
                        Post.update({_id: form._id}, {
                            title: form.title,
                            abstract: form.abstract,
                            tags: form.tags,
                            draft: draft._id,
                            publish: form.publish,
                            hidden: form.hidden
                        }, function (err, numberAffected, raw) {
                            util.suit(err, function () {
                                res.json({
                                    draft: {
                                        _id: draft._id,
                                        saveAt: draft.saveAt
                                    }
                                });
                            });
                        });
                    });
                });
            });
    };

    return postRouter;

});

