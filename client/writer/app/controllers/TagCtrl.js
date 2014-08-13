/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {

    return ['$rootScope', '$scope', '$route', '$location', 'Tag', function ($rootScope, $scope, $route, $location, Tag) {

        $scope.tag = {};

        $scope.submit = function () {
            event.preventDefault();

            Tag.save($scope.tag, function (tag) {
                $scope.tag = tag;
            });
        };
    }];
});