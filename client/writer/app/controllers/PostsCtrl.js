/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {

    return ['$rootScope', '$scope', '$route', '$location', 'Posts', function ($rootScope, $scope, $route, $location, Posts) {

        $scope.posts = Posts.query();

    }];
});