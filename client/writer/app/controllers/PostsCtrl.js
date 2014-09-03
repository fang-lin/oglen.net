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

                            var pager = $scope.pager;

                            Posts.count.get(function (res) {
                                pager.create(res.count, function (skip, limit) {
                                    $location.path('/posts/' + skip + '/' + limit);
                                });
                            });

                            $scope.posts = Posts.query({
                                skip: pager.skip,
                                limit: pager.limit
                            });
                        };

                        $scope.delete = function (postId) {

                            Post.delete({
                                id: postId
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