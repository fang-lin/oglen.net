/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Setting'
], function (Setting) {

    var settingsRouter = function (router, logger) {

        router
            .route('/settings')
            .get(function (req, res, next) {

                Setting.find(function (err, docs) {

                    if (err) {

                        logger.error(err);
                        res.status(500).json({status: 'failure'});

                    } else {

                        res.json(docs);
                    }
                });
            });
    };

    return settingsRouter;
});