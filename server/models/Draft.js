/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose',
    'server/schemas/Draft'
], function (mongoose, DraftSchema) {
    'use strict';

    var Draft = mongoose.model('Draft', DraftSchema);

    return Draft;
});