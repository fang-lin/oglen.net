/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/User'
], function (User) {
    'use strict';

    return function (router) {
        router
            .all(function (req, res, next) {
                console.log('all');
                next();
            })
            .get(function (req, res, next) {
                console.log('get');
                res.json({
                    a: 123
                });
            })
            .put(function (req, res, next) {
                console.log('put');
            })
            .post(function (req, res, next) {
                console.log('post');
            })
            .delete(function (req, res, next) {
                console.log('delete');
            });
    };
});