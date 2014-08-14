/**
 * Site: http://oglen.net/.
 * Author: Justin
 * Date: 14-6-24.
 */

define([
    '../../config', // Project configuration.
    'log4js',
    'express',
    'server/routers/post',
    'server/routers/posts',
    'server/routers/tag',
    'server/routers/tags',
    'server/routers/user',
    'server/routers/users',
    'server/routers/role',
    'server/routers/roles',
    'server/routers/setting',
    'server/routers/settings'
], function (config, log4js, express, postRouter, postsRouter, tagRouter, tagsRouter, userRouter, usersRouter, roleRouter, rolesRouter, roleSetting, roleSettings) {
    'use strict';

    var logger = log4js.getLogger('router'); // TRACE, DEBUG, INFO, WARN, ERROR, FATAL
    logger.setLevel('TRACE');

    var router = express.Router();

    postRouter(router, logger);
    postsRouter(router, logger);
    tagRouter(router, logger);
    tagsRouter(router, logger);
    userRouter(router, logger);
    usersRouter(router, logger);
    roleRouter(router, logger);
    rolesRouter(router, logger);
    roleSetting(router, logger);
    roleSettings(router, logger);

    return router;
});