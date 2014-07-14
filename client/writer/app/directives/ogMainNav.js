/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */
define(function () {
    'use strict';

    return [
        '$compile',
        function ($compile) {

            return {
                restrict: 'A',
                templateUrl: 'app/templates/ogMainNav.html',
                scope: {
                    list: '='
                },
                compile: function (tEle) {
                    var contents = tEle.contents().remove(),
                        compiled;
                    return function (scope, iEle) {
                        if (!compiled) {
                            compiled = $compile(contents);
                        }
                        compiled(scope, function (clone) {
                            iEle.replaceWith(clone);
                        });
                    };
                }
            };
        }
    ];
});