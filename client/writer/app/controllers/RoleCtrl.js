/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        '$rootScope',
        '$scope',
        '$route',
        '$routeParams',
        '$location',
        'Role',
        function ($rootScope, $scope, $route, $routeParams, $location, Role) {
            var id = $routeParams.id;

            if (id) {
                // edit
                $scope.role = Role.get({id: id});
            } else {
                // add
                $scope.role = {};
            }

            $scope.submit = function () {
                event.preventDefault();

                var $role = $scope.role;

                if ($role._id) {
                    // update existing role
                    Role.update($role, function (role) {
                        // todo: alert success.
                    });
                } else {
                    // create new role
                    Role.save($role, function (role) {
                        $role._id = role._id;

                        var path = $location.path;
                        path(path() + $role._id, false);
                    });
                }
            };
        }];
});