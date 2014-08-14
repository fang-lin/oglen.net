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
        'Users',
        function ($rootScope, $scope, $route, $location, Users) {

            $scope.users = Users.query();

        }];
});