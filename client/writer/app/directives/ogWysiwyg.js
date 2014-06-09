/**
 * Created by Justin on 14-6-10.
 */

define(['bootstrap-wysiwyg'], function () {
    'use strict';

    return [
        function () {
            var link = function (scope, ele, attrs) {
                ele.find('#editor').wysiwyg();
                console.log(ele);
            };
            return {
                restrict: 'A',
                templateUrl: 'app/templates/ogWysiwyg.html',
                replace: true,
                scope: {},
                link: link
            };
        }
    ];
});