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
        'Post',
        'Posts',
        'pager',
        'AUTH_EVENTS',
        function ($rootScope, $scope, $routeParams, $location, Post, Posts, pager, AUTH_EVENTS) {
            if ($rootScope.isLogin) {
                $rootScope.$watch('settings', function (settings) {
                    if (settings) {
                        $scope.refresh = function () {
                            Posts.count.get(function (res) {
                                $scope.count = res.count;
                            });
                            $scope.posts = Posts.query({
                                skip: $scope.skip,
                                limit: $scope.limit
                            });
                        };
                        $scope.delete = function (postId) {
                            Post.delete({
                                id: postId
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