/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose'
], function (mongoose) {
    'use strict';

    var Schema = mongoose.Schema,

        PostSchema = new Schema({
            title: String,
            commits: {
                type: String,
                ref: db.CsbNode
            }
        });

    return PostSchema;
});