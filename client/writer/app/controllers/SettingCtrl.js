/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {

    return [
        '$rootScope',
        '$scope',
        '$route',
        '$location',
        'Setting',
        function ($rootScope, $scope, $route, $location, Setting) {

            $scope.setting = {};

            $scope.submit = function () {
                event.preventDefault();
                Setting.save($scope.setting);
            }
        }];
});