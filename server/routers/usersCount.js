/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/User'
], function (User) {
    'use strict';

    return function (route) {
        route
            .get(function (req, res, next) {
                User
                    .count()
                    .exec(function (err, docs) {
                        res.send({
                            count: docs
                        });
                    });
            });
    };
});