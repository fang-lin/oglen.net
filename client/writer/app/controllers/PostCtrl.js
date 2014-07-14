/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(['redactor'], function () {

    return ['$rootScope', '$scope', '$route', function ($rootScope, $scope, $route) {

        $('#editor').redactor({
            plugins: ['clips', 'fontcolor', 'fontfamily', 'fontsize', 'fullscreen', 'textdirection'],
            height: 500
        });

    }];
});