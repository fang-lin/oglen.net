/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'config',
    'jsonwebtoken'
], function (config, jwt) {
    'use strict';

    var authorizationRouter = function (router, util) {
        router
            .route('/authorization')
            .post(function (req, res, next) {

                var form = req.body;
                //TODO validate req.body.username and req.body.password
                //if is invalid, return 401
                if (!(form.username === '123' && form.password === '123')) {
                    res.send(401, 'Wrong user or password');
                    return;
                }

                var profile = {
                    first_name: 'John',
                    last_name: 'Doe',
                    email: 'john@doe.com',
                    id: 123
                };

                // We are sending the profile inside the token
                var token = jwt.sign(profile, config.secret, { expiresInMinutes: 60 * 5 });

                res.json({ token: token });
            });
    };

    return authorizationRouter;
});
