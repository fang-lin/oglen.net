/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Setting'
], function (Setting) {

    var settingRouter = function (router, logger) {

        router
            .route('/setting')
            .post(function (req, res, next) {

                var setting = new Setting(req.body);

                setting.save(function (err, product, numberAffected) {
                    if (err) {
                        logger.error(err);
                        res.status(500).json({status: 'failure'});
                    } else {
                        res.json(setting);
                    }
                });
            });
    };

    return settingRouter;
});