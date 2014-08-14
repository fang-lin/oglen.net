/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Role'
], function (Role) {

    var roleRouter = function (router, logger) {

        router
            .route('/role')
            .post(function (req, res, next) {

                var role = new Role(req.body);

                role.save(function (err, product, numberAffected) {
                    if (err) {
                        logger.error(err);
                        res.status(500).json({status: 'failure'});
                    } else {
                        res.json(role);
                    }
                });
            });
    };

    return roleRouter;
});

