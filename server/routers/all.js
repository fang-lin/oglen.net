/**
 * Site: http://oglen.net/.
 * Author: Justin
 * Date: 14-6-24.
 */

define([
    '../../config', // Project configuration.
    'log4js',
    'express',
    'server/routers/authorization',
    'server/routers/post',
    'server/routers/posts',
    'server/routers/draft',
    'server/routers/drafts',
    'server/routers/tag',
    'server/routers/tags',
    'server/routers/comment',
    'server/routers/comments',
    'server/routers/user',
    'server/routers/users',
    'server/routers/role',
    'server/routers/roles',
    'server/routers/setting',
    'server/routers/settings'
], function (config, log4js, express, authorization, post, posts, draft, drafts, tag, tags, comment, comments, user, users, role, roles, setting, settings) {
    'use strict';

    var logger = log4js.getLogger('router'); // TRACE, DEBUG, INFO, WARN, ERROR, FATAL
    logger.setLevel('TRACE');

    var router = express.Router();

    router.cap = function (err, res, callback) {
        if (err) {
            logger.error(err);
            res.status(500).json({status: 'failure'});
        } else {
            callback(logger);
        }
    };

    var delay = config.delay;

    if (delay) {
        router
            .route('*')
            .get(function (req, res, next) {
                setTimeout(function () {
                    next();
                }, delay);
            });
    }

    [authorization, post, posts, draft, drafts, tag, tags, comment, comments, user, users, role, roles, setting, settings].forEach(function (route) {
        route(router);
    });

    return router;
});