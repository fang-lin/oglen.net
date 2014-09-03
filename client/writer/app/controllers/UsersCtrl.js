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
        'Users',
        'pager',
        'AUTH_EVENTS',
        function ($rootScope, $scope, $routeParams, $location, User, Users, pager, AUTH_EVENTS) {

            if ($rootScope.isLogin) {

                $rootScope.$watch('settings', function (settings) {
                    if (settings) {
                        var skip = $scope.skip = $routeParams.skip || 0,
                            limit = $scope.limit = settings['page_size'] || 10,
                            size = settings['pager_size'] || 5;

                        skip === 0 && $location.path('/users/0', false);

                        Users.count.get(function (res) {
                            $scope.pager = pager(res.count, skip, limit, size);
                        });

                        $scope.users = Users.query({skip: skip, limit: limit});

                        $scope.delete = function (userId) {
                            User.delete({
                                id: userId
                            }, function (res) {
                                $scope.users = Users.query({skip: skip, limit: limit});
                            });
                        }
                    }
                });
            }
        }];
});