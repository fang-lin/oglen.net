/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function (wysiwyg) {

    return ['$rootScope', '$scope', '$route', function ($rootScope, $scope, $route) {

        console.log($route.current.params['postId']);
        console.log($scope);


    }];
});