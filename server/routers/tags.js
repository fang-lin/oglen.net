/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Tag'
], function (Tag) {

    var tagsRouter = function (router, util) {
        router
            .route('/tags')
            .get(function (req, res, next) {
                Tag.find(function (err, docs) {
                    util.suit(err, function () {
                        res.json(docs);
                    });
                });
            });
    };

    return tagsRouter;
});

