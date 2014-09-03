/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'underscore'
], function (_) {
    'use strict';

    return [
        '$rootScope',
        '$scope',
        '$routeParams',
        '$location',
        'Tag',
        'Tags',
        'pager',
        'AUTH_EVENTS',
        function ($rootScope, $scope, $routeParams, $location, Tag, Tags, pager, AUTH_EVENTS) {

            if ($rootScope.isLogin) {
                $rootScope.$watch('settings', function (settings) {
                    if (settings) {

                        $scope.refresh = function () {

                            var pager = $scope.pager;

                            Tags.count.get(function (res) {
                                pager.create(res.count, function (skip, limit) {
                                    $location.path('/tags/' + skip + '/' + limit);
                                });
                            });

                            $scope.tags = Tags.query({
                                skip: pager.skip,
                                limit: pager.limit
                            });
                        };

                        $scope.delete = function (tagId) {

                            Tag.delete({
                                id: tagId
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