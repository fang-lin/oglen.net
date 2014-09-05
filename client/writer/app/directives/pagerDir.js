/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    function createChain(skip, limit, count, size, fn) {

        var chain = [];
        var total = Math.ceil(count / limit);

        if (total <= 1) {
            if (count <= skip) {
                skip = 0;
                if (_.isFunction(fn)) {
                    fn(skip, limit);
                }
            }
            return chain;
        }
        if (count <= skip) {
            skip = (total - 1) * limit;
            if (_.isFunction(fn)) {
                fn(skip, limit);
            }
            return chain;
        }

        var len = total - 0;
        var page = 0;

        if (total > size) {
            len = size - 0;
            page = skip / limit - Math.floor(size / 2);

            if (page < 0) {
                page = 0;
            }

            if (page > total - size) {
                page = total - size;
            }
        }
        if (page > 0) {
            chain.push({
                num: 1,
                skip: 0
            });
        }
        for (var i = page, l = page + len; i < l; ++i) {
            chain.push({
                num: i + 1,
                skip: i * limit
            });
        }
        if (i < total) {
            chain.push({
                num: total,
                skip: (total - 1) * limit
            });
        }
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
                    count: '='
                },
                link: function (scope, ele, attrs) {
                    var skip, limit, count;
                    var settings = $rootScope.settings;

                    var match = $route.current.originalPath.match(/\/.+?\//i);
                    scope.path = match ? match[0] : '';

                    scope.$watch('count', function () {
                        count = scope.count || 0;
                        console.log('count', count);

                        console.log(skip, limit, count)

                        scope.chain = createChain(skip, limit, count, 5, function () {

                        });

                        console.log(scope.chain)
                    });

                    scope.$watch('skip', function () {
                        skip = scope.skip || 0;
                        console.log('skip', skip);
                    });
                    scope.$watch('limit', function () {
                        limit = scope.limit || settings['pager_limit'];

                        console.log('limit', limit);
                    });
                }
            };
        }];
});