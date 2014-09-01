/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'crypto'
], function (crypto) {
    'use strict';

    var md5 = function (code) {
        return crypto.createHash('md5').update(code).digest('hex');
    };

    return [
        '$rootScope',
        '$scope',
        '$routeParams',
        '$location',
        'User',
        'Roles',
        function ($rootScope, $scope, $routeParams, $location, User, Roles) {

            if ($rootScope.isLogin) {

                var id = $routeParams.id;

                if (id) {
                    //edit
                    $scope.user = User.get({id: id});
                } else {
                    // add
                    $scope.user = {};
                }

                $scope.roles = Roles.query();

                $scope.submit = function (user) {
                    event.preventDefault();

                    var $user = user;
                    $user.password = md5(user.password);

                    if ($user._id) {
                        // update existing user
                        User.update($user, function (user) {
                            // todo: alert success.
                        });
                    } else {
                        // create existing user
                        User.save($user, function (user) {
                            $user._id = user._id;
                            $user.createAt = user.createAt;

                            var path = $location.path;
                            path(path() + $user._id, false);
                        });
                    }
                };
            }
        }];
});