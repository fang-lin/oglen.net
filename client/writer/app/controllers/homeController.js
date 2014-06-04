/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(['angular'], function () {

    angular.module('HomeController', []).controller('HomeController', ['$scope', function ($scope) {
        console.log($scope);
    }]);
});