/**
 * Site: http://oglen.net/.
 * Author: Justin
 * Date: 14-6-24.
 */

define([
    '../../config', // Project configuration.
    'log4js',
    'express',
    'server/routers/posts',
    'server/routers/post',
    'server/routers/tags',
    'server/routers/tag',
    'server/routers/user'
], function (config, log4js, express, postsRouter, postRouter, tagsRouter, tagRouter, userRouter) {
    'use strict';

    var logger = log4js.getLogger('router'); // TRACE, DEBUG, INFO, WARN, ERROR, FATAL
    logger.setLevel('TRACE');

    var router = express.Router();

    postsRouter(router, logger);
    postRouter(router, logger);
    tagsRouter(router, logger);
    tagRouter(router, logger);
    userRouter(router, logger);

    return router;
});