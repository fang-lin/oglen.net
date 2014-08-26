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
        'Comments',
        function ($rootScope, $scope, $route, $routeParams, $location, Comments) {

            $rootScope.$watch('settings', function (settings) {
                if (settings) {
                    var skip = $scope.skip = $routeParams.skip || 0,
                        limit = $scope.limit = settings['page_size'] || 10,
                        size = settings['pager_size'] || 5;

                    skip === 0 && $location.path('/comments/0', false);

                    Comments.count.get(function (res) {
                        $scope.pager = $rootScope.pager(res.count, skip, limit, size);
                    });

                    $scope.comments = Comments.query({skip: skip, limit: limit});
                }
            });
        }];
});