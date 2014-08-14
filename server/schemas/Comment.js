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
            post: {
                type: ObjectId,
                index: true,
                required: true
            },
            username: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            text: String,
            createAt: {
                type: Date,
                default: Now
            },
            clientIp: {
                type: String,
                default: '0.0.0.0'
            },
            removed: {
                type: Boolean,
                default: false
            }
        });

    return CommentSchema;
});