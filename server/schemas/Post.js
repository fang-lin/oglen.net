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
                index: true,
                required: true
            },
            abstract: String,
            author: {
                type: ObjectId,
                ref: 'User',
                required: true
            },
            draft: {
                type: ObjectId,
                ref: 'Draft'
            },
            tags: [
                {
                    type: ObjectId,
                    ref: 'Tag'
                }
            ],
            createAt: {
                type: Date,
                default: Now
            },
            clicks: {
                type: Number,
                default: 0
            },
            password: String,
            hidden: {
                type: Boolean,
                default: false
            },
            isPage: {
                type: Boolean,
                default: false
            },
            publish: {
                type: Boolean,
                default: false
            },
            removed: {
                type: Boolean,
                default: false
            }
        });

    return PostSchema;
});