/**
 * Site: http://oglen.net/.
 * Author: Justin
 * Date: 14-6-24.
 */

define([
    'express',
    'server/routers/user',
    'server/routers/users'
], function (express, user, users) {
    'use strict';

    var router = express.Router();

    user(router.route('/user/:user_id'));
    users(router.route('/users/'));

    return router;
});