/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Setting'
], function (Setting) {

    var settingRouter = function (router, util) {
        router
            .route('/setting/:id?')
            .get(function (req, res, next) {
                var id = req.param('id');

                Setting
                    .findById(id)
                    .exec(function (err, docs) {
                        util.suit(err, function () {
                            res.json(docs);
                        });
                    });
            })
            .post(function (req, res, next) {
                var setting = new Setting(req.body);

                setting.save(function (err, product, numberAffected) {
                    util.suit(err, function () {
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
                    util.suit(err, function () {
                        res.json(form);
                    });
                });
            });
    };

    return settingRouter;
});