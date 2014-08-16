/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/User'
], function (User) {

    var usersRouter = function (router, util) {
        router
            .route('/users')
            .get(function (req, res, next) {
                User
                    .find()
                    .populate({
                        path: 'role',
                        select: '_id name'
                    })
                    .exec(function (err, docs) {
                        util.suit(err, function () {
                            res.json(docs);
                        });
                    });
            });
    };

    return usersRouter;
});