/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Post',
    'server/models/Draft'
], function (Post, Draft) {

    var postRouter = function (router, logger) {

        router
            .route('/post')
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

                    if (err) {

                        logger.error(err);
                        res.status(500).json({status: 'failure'});

                    } else {

                        var draft = new Draft({
                            post: post._id,
                            text: form.body,
                            flag: 'draft'
                        });

                        draft.save(function (err, product, numberAffected) {

                            if (err) {
                                logger.error(err);
                                res.status(500).json({status: 'failure'});

                            } else {
                                Post.update({_id: post._id}, {body: draft._id}, function (err, numberAffected, raw) {

                                    if (err) {

                                        logger.error(err);
                                        res.status(500).json({status: 'failure'});

                                    } else {
                                        res.json({
                                            _id: post._id,
                                            title: post.title,
                                            abstract: post.abstract,
                                            author: post.author,
                                            tags: post.tags,
                                            body: draft.text,
                                            publish: post.publish,
                                            hidden: post.hidden,
                                            clicks: post.clicks,
                                            createAt: post.createAt,
                                            updateAt: draft.saveAt
                                        });
                                    }
                                });
                            }
                        });
                    }
                })
            })
            .put(function (req, res, next) {

                var form = req.body,

                    draft = new Draft({
                        post: form._id,
                        text: form.body,
                        flag: 'draft'
                    });

                draft.save(function (err, product, numberAffected) {

                    if (err) {

                        logger.error(err);
                        res.status(500).json({status: 'failure'});

                    } else {

                        Post.update({_id: form._id}, {
                            title: form.title,
                            abstract: form.abstract,
                            tags: form.tags,
                            body: draft._id,
                            publish: form.publish,
                            hidden: form.hidden
                        }, function (err, numberAffected, raw) {

                            if (err) {

                                logger.error(err);
                                res.status(500).json({status: 'failure'});

                            } else {

                                res.json({
                                    _id: form._id,
                                    title: form.title,
                                    abstract: form.abstract,
                                    author: form.author,
                                    tags: form.tags,
                                    body: draft.text,
                                    publish: form.publish,
                                    hidden: form.hidden,
                                    clicks: form.clicks,
                                    createAt: form.createAt,
                                    updateAt: draft.saveAt
                                });
                            }
                        });
                    }
                });
            });
    };

    return postRouter;

});

