/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Tag'
], function (Tag) {

    var tagRouter = function (router, util) {
        router
            .route('/tag/:id?')
            .get(function (req, res, next) {
                var id = req.param('id');

                Tag
                    .findById(id)
                    .exec(function (err, docs) {
                        util.suit(err, function () {
                            res.json(docs);
                        });
                    });
            })
            .post(function (req, res, next) {
                var tag = new Tag(req.body);

                tag.save(function (err, product, numberAffected) {

                    util.suit(err, function () {
                        res.json(tag);
                    });
                });
            })
            .put(function (req, res, next) {
                var form = req.body;

                Tag.update({_id: form._id}, {
                    name: form.name
                }, function (err, numberAffected, raw) {
                    util.suit(err, function () {
                        res.json(form);
                    });
                });
            });
    };

    return tagRouter;
});

