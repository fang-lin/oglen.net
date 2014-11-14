/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'underscore',
    'server/models/Setting'
], function (_, Setting) {
    'use strict';

    return function (route) {
        route
            .get(function (req, res, next) {
                var skip = req.param('skip') || 0;
                var limit = req.param('limit') || 1000;
                var scopes = req.param('scopes') || '-';
                var query = Setting.find();

                if (scopes !== '-') {
                    query
                        .all('scopes', _.compact(scopes.split('+')));
                }

                query
                    .skip(skip)
                    .limit(limit)
                    .sort({
                        _id: -1
                    })
                    .exec()
                    .then(function (docs) {
                        res.send(docs);
                    });
            });
    };
});