/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Tag'
], function (Tag) {

    var tagRouter = function (router, logger) {

        router
            .route('/tag')
            .post(function (req, res, next) {

                var tag = new Tag(req.body);

                tag.save(function (err, product, numberAffected) {
                    if (err) {
                        logger.error(err);
                        res.status(500).json({status: 'failure'});
                    } else {
                        res.json(tag);
                    }
                });
            });
    };

    return tagRouter;
});

