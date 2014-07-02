/**
 * Site: http://oglen.net/.
 * Author: Justin
 * Date: 14-6-24.
 */

define([
    'express',
    'server/models/User'
], function (express, User) {
    'use strict';

    var router = express.Router();


    router
        .route('/user/:userId')
        .all(function (req, res, next) {
            console.log('all');
            next();
        })
        .get(function (req, res, next) {
            console.log('get');
            res.json('get');
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

    return router;
});