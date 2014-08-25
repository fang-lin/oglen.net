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
        'Setting',
        function ($rootScope, $scope, $route, $routeParams, $location, Setting) {
            var id = $routeParams.id;

            if (id) {
                // edit
                $scope.setting = Setting.get({id: id});
            } else {
                // add
                $scope.setting = {};
            }

            $scope.submit = function () {
                event.preventDefault();

                var $setting = $scope.setting;

                if ($setting._id) {
                    // update existing setting
                    Setting.update($setting, function (setting) {
                        // todo: alert success.
                    });
                } else {
                    // create new setting
                    Setting.save($setting, function (setting) {
                        $setting._id = setting._id;

                        var path = $location.path;
                        path(path() + $setting._id, false);
                    });
                }
            };
        }];
});