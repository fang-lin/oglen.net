/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(['angular'], function () {

    angular.module('PostsController', []).controller('PostsController', ['$scope', function ($scope) {
        console.log($scope);
    }]);
});