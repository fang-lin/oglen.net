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
                    var skip = $routeParams.skip || 0,
                        limit = $routeParams.limit || settings['pager_limit'],
                        count = Comments.count.get();

                    $scope.comments = Comments.query({skip: skip, limit: limit});
                }
            });
        }];
});