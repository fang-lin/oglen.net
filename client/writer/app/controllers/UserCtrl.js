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
        'User',
        function ($rootScope, $scope, $route, $location, User) {

            $scope.user = {};

            $scope.submit = function () {
                event.preventDefault();
                User.save($scope.user);
            }
        }];
});