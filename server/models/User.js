/**
 * Site: http://oglen.net/.
 * Author: Justin
 * Date: 14-6-25.
 */

define([
    'mongoose',
    'server/schemas/User'
], function (mongoose, UserSchema) {
    'use strict';

    var User = mongoose.model('User', UserSchema);

    return User;
});
