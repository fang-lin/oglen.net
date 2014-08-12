/**
 * Site: http://oglen.net/.
 * Author: Justin
 * Date: 14-6-25.
 */

define([
    'mongoose'
], function (mongoose) {
    'use strict';

    var Schema = mongoose.Schema;

    // Define User schema
    var userSchema = new Schema({
        id: String,
        email: String,
        name: String,
        salt: String,
        password: String
    });

    userSchema.index({id: 1}, {unique: true});
    userSchema.index({name: 1}, {unique: true});

    var User = mongoose.model('User', userSchema);

    User.update({
        name: 'Justin'
    }, {
        email: 'Fang'
    });

//    var user = new User({
//        id: 'asdasdas34324',
//        email: 'justin@oglen.net',
//        name: 'Justin'
//    });
//
//    user.save(function (err) {
//        if (err)
//            console.log('meow');
//    });


});
