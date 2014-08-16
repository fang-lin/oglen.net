/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose',
    'server/schemas/Setting'
], function (mongoose, SettingSchema) {
    'use strict';

    var Setting = mongoose.model('Setting', SettingSchema);

    return Setting;
});