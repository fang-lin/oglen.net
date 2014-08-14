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
        'Roles',
        function ($rootScope, $scope, $route, $location, User, Roles) {

            $scope.user = {};
            $scope.roles = Roles.query();

            $scope.submit = function () {
                event.preventDefault();
                User.save($scope.user);
            }
        }];
});