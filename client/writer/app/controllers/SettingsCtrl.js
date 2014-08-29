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
        'Settings',
        'pager',
        'AUTH_EVENTS',
        function ($rootScope, $scope, $routeParams, $location, Settings, pager, AUTH_EVENTS) {
            $rootScope.isLogin && $rootScope.$watch('settings', function (settings) {
                if (settings) {
                    var skip = $scope.skip = $routeParams.skip || 0,
                        limit = $scope.limit = settings['page_size'] || 10,
                        size = settings['pager_size'] || 5;

                    skip === 0 && $location.path('/settings/0', false);

                    Settings.count.get(function (res) {
                        $scope.pager = pager(res.count, skip, limit, size);
                    });

                    $scope.settings = Settings.query({skip: skip, limit: limit});
                }
            });
        }];
});