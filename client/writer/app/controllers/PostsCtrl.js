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
        'Posts',
        function ($rootScope, $scope, $route, $routeParams, $location, Posts) {

            $rootScope.$watch('settings', function (settings) {
                if (settings) {
                    var skip = $routeParams.skip || 0,
                        limit = $routeParams.limit || settings['pager_limit'];

                    Posts.count.get(function (res) {
                        var pager = [];
                        for (var index = 0, len = Math.ceil(res.count / limit); index < len; ++index) {
                            pager.push(index * limit);
                        }
                        $scope.pager = pager;
                    });

                    $scope.posts = Posts.query({skip: skip, limit: limit});
                }
            });
        }];
});