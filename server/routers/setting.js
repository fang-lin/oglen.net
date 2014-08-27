/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Setting'
], function (Setting) {
    'use strict';

    var settingRouter = function (router, util) {
        router
            .route('/setting/:id?')
            .get(function (req, res, next) {
                var id = req.param('id');

                Setting
                    .findById(id)
                    .exec(function (err, docs) {
                        router.cap(err, res, function () {
                            res.json(docs);
                        });
                    });
            })
            .post(function (req, res, next) {
                var setting = new Setting(req.body);

                setting.save(function (err, product, numberAffected) {
                    router.cap(err, res, function () {
                        res.json(setting);
                    });
                });
            })
            .put(function (req, res, next) {
                var form = req.body;

                Setting.update({_id: form._id}, {
                    key: form.key,
                    value: form.value,
                    note: form.note
                }, function (err, numberAffected, raw) {
                    router.cap(err, res, function () {
                        res.json(form);
                    });
                });
            });
    };

    return settingRouter;
});