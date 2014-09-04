/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Setting'
], function (Setting) {
    'use strict';

    var settingsRouter = function (router) {
        router
            .route('/settings/count')
            .get(function (req, res, next) {

                Setting
                    .count()
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {

                            res.send({count: docs});
                        });
                    });
            });

        router
            .route('/settings/:skip?/:limit?')
            .get(function (req, res, next) {
                var skip = req.param('skip') || 0;
                var limit = req.param('limit') || 100;
                Setting
                    .find()
                    .skip(skip)
                    .limit(limit)
                    .sort({
                        _id: -1
                    })
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {

                            res.send(docs);
                        });
                    });
            });
    };
    return settingsRouter;
});