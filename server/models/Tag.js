/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose',
    'server/schemas/Tag'
], function (mongoose, TagSchema) {
    'use strict';

    var Tag = mongoose.model('Tag', TagSchema);

    return Tag;
});