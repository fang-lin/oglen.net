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
        'Role',
        'Roles',
        'pager',
        'AUTH_EVENTS',
        function ($rootScope, $scope, $routeParams, $location, Role, Roles, pager, AUTH_EVENTS) {

            if ($rootScope.isLogin) {

                $rootScope.$watch('settings', function (settings) {
                    if (settings) {
                        
                        $scope.refresh = function () {

                            var pager = $scope.pager;

                            Roles.count.get(function (res) {
                                pager.create(res.count, function (skip, limit) {
                                    $location.path('/roles/' + skip + '/' + limit);
                                });
                            });

                            $scope.roles = Roles.query({
                                skip: pager.skip,
                                limit: pager.limit
                            });
                        };

                        $scope.delete = function (roleId) {

                            Role.delete({
                                id: roleId
                            }, function (res) {

                                $scope.refresh();
                            });
                        };

                        $scope.pager = pager.init($routeParams.skip, $routeParams.limit || settings['pager_limit'], settings['pager_size']);
                        $scope.refresh();
                    }
                });
            }
        }];
});