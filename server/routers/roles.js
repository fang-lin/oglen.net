/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Role'
], function (Role) {

    var rolesRouter = function (router, util) {
        router
            .route('/roles')
            .get(function (req, res, next) {
                Role.find(function (err, docs) {
                    util.suit(err, function () {
                        res.json(docs);
                    });
                });
            });
    };

    return rolesRouter;
});

