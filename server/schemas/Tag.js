/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose'
], function (mongoose) {
    'use strict';

    var Schema = mongoose.Schema,

        TagSchema = new Schema({
            name: {
                type: String,
                index: true
            },
            count: Number
        });

    return TagSchema;
});