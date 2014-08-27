/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        '$scope',
        '$routeParams',
        '$location',
        'User',
        'Roles',
        function ($rootScope, $scope, $routeParams, $location, User, Roles) {
            var id = $routeParams.id;

            if (id) {
                //edit
                $scope.user = User.get({id: id});
            } else {
                // add
                $scope.user = {};
            }

            $scope.roles = Roles.query();

            $scope.submit = function () {
                event.preventDefault();

                var $user = $scope.user;

                if ($user._id) {
                    // update existing user
                    User.update($user, function (tag) {
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
        }];
});