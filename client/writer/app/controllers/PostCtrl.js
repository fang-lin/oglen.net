/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {

    return ['$rootScope', '$scope', '$route', function ($rootScope, $scope, $route) {

        console.log($route.current.params['postId']);
        console.log($scope);

        $scope.tinymceOptions = {
            handle_event_callback: function (e) {
                // put logic here for keypress
            }
        };


    }];
});