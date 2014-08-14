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
        'Settings',
        function ($rootScope, $scope, $route, $location, Settings) {

            $scope.settings = Settings.query();

        }];
});