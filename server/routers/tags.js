/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'server/models/Tag'
], function (Tag) {

    var tagsRouter = function (router, logger) {

        router
            .route('/tags')
            .get(function (req, res, next) {

                Tag.find(function (err, docs) {

                    if (err) {

                        logger.error(err);
                        res.status(500).json({status: 'failure'});

                    } else {

                        res.json(docs);
                    }
                });
            });
    };

    return tagsRouter;
});

