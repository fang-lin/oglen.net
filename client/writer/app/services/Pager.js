/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define(function () {
    'use strict';

    return [function () {

        return function (count, skip, limit, size) {
            var pager = [],
                total = Math.ceil(count / limit);

            if (total < 2) {
                return pager;
            }

            var len = total - 0,
                page = 0;

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
                pager.push({
                    page: 1,
                    skip: 0
                });
            }

            for (var i = page, l = page + len; i < l; ++i) {
                pager.push({
                    page: i + 1,
                    skip: i * limit
                });
            }

            if (i < total) {
                pager.push({
                    page: total,
                    skip: (total - 1) * limit
                });
            }

            return pager;
        };
    }];
});