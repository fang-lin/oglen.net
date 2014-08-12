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

        PostSchema = new Schema({
            title: {
                type: String,
                index: true
            },
            abstract: String,
            author: {
                type: String,
                ref: 'User'
            },
            body: {
                type: ObjectId,
                ref: 'Draft'
            },
            tags: [
                {
                    type: ObjectId,
                    ref: 'Tag'
                }
            ],
//            comments: [
//                {
//                    type: Schema.Types.ObjectId,
//                    ref: 'Comment'
//                }
//            ],
            createAt: {
                type: Date,
                default: Now
            },
            clicks: Number,
            hidden: Boolean,
            publish: Boolean
        });

    return PostSchema;
});