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
        'Tag',
        function ($rootScope, $scope, $routeParams, $location, Tag) {

            if (!$rootScope.isLogin) {
                return;
            }

            var id = $routeParams.id;

            if (id) {
                // edit
                $scope.tag = Tag.get({id: id});
            } else {
                // add
                $scope.tag = {};
            }

            $scope.submit = function (tag) {
                event.preventDefault();

                var $tag = tag;

                if ($tag._id) {
                    // update existing tag
                    Tag.update($tag, function (tag) {
                        // todo: alert success.
                    });
                } else {
                    // create new tag
                    Tag.save($tag, function (tag) {
                        $tag._id = tag._id;

                        var path = $location.path;
                        path(path() + $tag._id, false);
                    });
                }
            };
        }];
});