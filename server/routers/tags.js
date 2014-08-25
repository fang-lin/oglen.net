/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Tag'
], function (Tag) {
    'use strict';

    var tagsRouter = function (router, util) {
        router
            .route('/tags/count')
            .get(function (req, res, next) {

                Tag
                    .count()
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {
                            res.json({count: docs});
                        });
                    });
            });

        router
            .route('/tags/:skip?/:limit?')
            .get(function (req, res, next) {
                var skip = req.param('skip') || 0,
                    limit = req.param('limit') || 100;

                Tag
                    .find()
                    .skip(skip)
                    .limit(limit)
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {
                            res.json(docs);
                        });
                    });
            });
    };

    return tagsRouter;
});

