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

    var util = {
        suit: function (err, callback) {
            if (err) {
                logger.error(err);
                res.status(500).json({status: 'failure'});
            } else {
                callback(logger);
            }
        }
    };


    postRouter(router, util);
    postsRouter(router, util);
    tagRouter(router, util);
    tagsRouter(router, util);
    userRouter(router, util);
    usersRouter(router, util);
    roleRouter(router, util);
    rolesRouter(router, util);
    roleSetting(router, util);
    roleSettings(router, util);

    return router;
});