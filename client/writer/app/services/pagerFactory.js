/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'underscore'
], function (_) {
    'use strict';

    function Page() {
        // defaults
        this.beads = [];
        this.skip = 0;
        this.limit = 10;
        this.size = 5;
        this.count = 0;
    }

    Page.prototype.init = function (skip, limit, size) {

        this.skip = (skip || 0 ) - 0;
        this.limit = (limit || 10) - 0;
        this.size = (size || 5) - 0;

        return this;
    };

    Page.prototype.create = function (count, fn) {

        this.count = count - 0;

        var beads = [],
            total = Math.ceil(this.count / this.limit);

        if (total <= 1) {
            this.beads = beads;
            if (this.count <= this.skip) {
                this.skip = 0;
                if (_.isFunction(fn)) {
                    fn(this.skip, this.limit);
                }
            }
            return this;
        }

        if (this.count <= this.skip) {
            this.skip = (total - 1) * this.limit;
            if (_.isFunction(fn)) {
                fn(this.skip, this.limit);
            }
            return this;
        }

        var len = total - 0,
            page = 0;

        if (total > this.size) {
            len = this.size - 0;
            page = this.skip / this.limit - Math.floor(this.size / 2);

            if (page < 0) {
                page = 0;
            }

            if (page > total - this.size) {
                page = total - this.size;
            }
        }

        if (page > 0) {
            beads.push({
                page: 1,
                skip: 0
            });
        }

        for (var i = page, l = page + len; i < l; ++i) {
            beads.push({
                page: i + 1,
                skip: i * this.limit
            });
        }

        if (i < total) {
            beads.push({
                page: total,
                skip: (total - 1) * this.limit
            });
        }

        this.beads = beads;

        return this;
    };

    return [function () {
        return new Page();
    }];
});