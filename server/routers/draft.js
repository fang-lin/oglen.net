/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Post',
    'server/models/Draft'
], function (Post, Draft) {
    'use strict';

    var draftRouter = function (router) {
        router
            .route('/draft/:id?')
            .get(function (req, res, next) {
                var id = req.param('id');

                Draft
                    .findById(id)
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {

                            res.send(docs);
                        });
                    });
            });
    };

    return draftRouter;
});