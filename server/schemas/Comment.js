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
        Now = Date.now,

        CommentSchema = new Schema({
            _postId: {
                type: ObjectId,
                index: true
            },
            username: String,
            email: String,
            body: String,
            data: {
                type: Date,
                default: Now
            }
        });

    return CommentSchema;
});