/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    /**
     * @private
     * @param {Number} skip is query offset;
     * @param {Number} limit is query limit;
     * @param {Number} count is chain max size;
     * @param {Number} size is chain max size;
     * @param {Function} fn is refresh callback if query over from count range;
     * @returns {Array} pager chain;
     */
    function createChain(skip, limit, count, size, fn) {
        var chain = [];
        var total = Math.ceil(count / limit);
        var interSize = size - 2;

        if (skip >= count) {
            fn && fn((total - 1) * limit, limit);
            return chain;
        }

        chain.push({
            num: 1,
            skip: 0
        });


        var second = skip / limit - Math.floor(interSize / 2);

        if(second > 0){

        }


//        var len = total - 0;
//        var page = 0;
//
//        if (total > size) {
//            len = size - 0;
//            page = skip / limit - Math.floor(size / 2);
//
//            if (page < 0) {
//                page = 0;
//            }
//
//            if (page > total - size) {
//                page = total - size;
//            }
//        }
//        if (page > 0) {
//            chain.push({
//                num: 1,
//                skip: 0
//            });
//        }
//        for (var i = page, l = page + len; i < l; ++i) {
//            chain.push({
//                num: i + 1,
//                skip: i * limit
//            });
//        }
//        if (i < total) {
//            chain.push({
//                num: total,
//                skip: (total - 1) * limit
//            });
//        }
        return chain;
    }

    return [
        '$rootScope',
        '$route',
        '$location',
        function ($rootScope, $route, $location) {

            return {
                restrict: 'E',
                templateUrl: 'app/templates/pager.html',
                replace: true,
                scope: {
                    skip: '=',
                    limit: '=',
                    count: '=',
                    base: '@'
                },
                link: function (scope, ele, attrs) {
                    var settings = $rootScope.settings;
                    var size = settings['pager_size'] || 5;

                    scope.$watch('count', function (count) {
                        if (count >= 0) {
                            scope.chain = createChain(scope.skip - 0, scope.limit - 0, count - 0, size - 0, function (skip, limit) {
                                $location.path('/' + scope.base + '/' + skip + '/' + limit);
                            });
                        }
                    });
                    scope.$watch('skip', function (skip) {
                        skip || (scope.skip = 0);
                    });
                    scope.$watch('limit', function (limit) {
                        limit || (scope.limit = settings['pager_limit'] || 10);
                    });
                }
            };
        }];
});