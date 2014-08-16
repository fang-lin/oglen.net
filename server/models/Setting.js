/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose'
], function (mongoose) {
    'use strict';

    var Schema = mongoose.Schema,

        SettingSchema = new Schema({
            key: {
                type: String,
                unique: true,
                index: true,
                required: true
            },
            value: String,
            note: String
        });

    var Setting = mongoose.model('Setting', SettingSchema);

    return Setting;
});