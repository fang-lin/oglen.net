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
        'Setting',
        'Settings',
        'pager',
        'AUTH_EVENTS',
        function ($rootScope, $scope, $routeParams, $location, Setting, Settings, pager, AUTH_EVENTS) {
            if ($rootScope.isLogin) {
                $rootScope.$watch('settings', function (settings) {
                    if (settings) {

                        $scope.refresh = function () {
                            Settings.count.get(function (res) {
                                $scope.count = res.count;
                            });
                            $scope.settings = Settings.query({
                                skip: $scope.skip,
                                limit: $scope.limit
                            });
                        };

                        $scope.delete = function (settingId) {
                            Setting.delete({
                                id: settingId
                            }, function (res) {
                                $scope.refresh();
                            });
                        };

                        $scope.skip = $routeParams.skip;
                        $scope.limit = $routeParams.limit;
                        $scope.refresh();
                    }
                });
            }
        }];
});