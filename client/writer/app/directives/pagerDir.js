/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [
        'pager',
        function (pager) {

            return {
                restrict: 'E',
                templateUrl: 'app/templates/pager.html',
                scope: {
                    pager: '='
                },
                link: function (tEle) {
                }
            };
        }
    ];
});