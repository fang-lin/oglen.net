/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Setting'
], function (Setting) {

    var settingsRouter = function (router, util) {
        router
            .route('/settings')
            .get(function (req, res, next) {
                Setting.find(function (err, docs) {
                    util.suit(err, function () {
                        res.json(docs);
                    });
                });
            });
    };

    return settingsRouter;
});