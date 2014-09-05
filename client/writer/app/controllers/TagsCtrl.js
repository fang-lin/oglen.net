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
                            Tags.count.get(function (res) {
                                $scope.count = res.count;
                            });
                            $scope.tags = Tags.query({
                                skip: $scope.skip,
                                limit: $scope.limit
                            });
                        };

                        $scope.delete = function (tagId) {
                            Tag.delete({
                                id: tagId
                            }, function (res) {
                                $scope.refresh();
                            });
                        };
                        $scope.skip = $routeParams.skip;
                        $scope.limit = $routeParams.limit;
                        $scope.count = 0;
                        $scope.refresh();
                    }
                });
            }
        }];
});