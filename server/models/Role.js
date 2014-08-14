/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'mongoose',
    'server/schemas/Role'
], function (mongoose, RoleSchema) {
    'use strict';

    var Role = mongoose.model('Role', RoleSchema);

    return Role;
});