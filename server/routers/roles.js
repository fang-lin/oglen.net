/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Role'
], function (Role) {

    var rolesRouter = function (router, logger) {

        router
            .route('/roles')
            .get(function (req, res, next) {

                Role.find(function (err, docs) {

                    if (err) {

                        logger.error(err);
                        res.status(500).json({status: 'failure'});

                    } else {

                        res.json(docs);
                    }
                });
            });
    };

    return rolesRouter;
});

