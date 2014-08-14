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
        'Role',
        function ($rootScope, $scope, $route, $location, Role) {

            $scope.role = {};

            $scope.submit = function () {
                event.preventDefault();
                Role.save($scope.role);
            }
        }];
});