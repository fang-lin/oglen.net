/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose'
], function (mongoose) {
    'use strict';

    var Schema = mongoose.Schema,
        ObjectId = Schema.Types.ObjectId,

        DraftSchema = new Schema({
            _postId: {
                type: ObjectId,
                index: true
            },
            text: String,
            data: Date,
            flag: String
        });

    return DraftSchema;
});