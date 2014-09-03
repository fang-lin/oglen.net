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
        'Comment',
        'Comments',
        'pager',
        'AUTH_EVENTS',
        function ($rootScope, $scope, $routeParams, $location, Comment, Comments, pager, AUTH_EVENTS) {

            if ($rootScope.isLogin) {

                $rootScope.$watch('settings', function (settings) {
                    if (settings) {
                        $scope.refresh = function () {

                            var pager = $scope.pager;

                            Comments.count.get(function (res) {
                                pager.create(res.count, function (skip, limit) {
                                    $location.path('/comments/' + skip + '/' + limit);
                                });
                            });

                            $scope.comments = Comments.query({
                                skip: pager.skip,
                                limit: pager.limit
                            });
                        };

                        $scope.delete = function (commentId) {

                            Comment.delete({
                                id: commentId
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