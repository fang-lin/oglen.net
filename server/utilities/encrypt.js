/**
 * Copyright 2006-2014 GrapeCity inc
 * Author: isaac.fang@grapecity.com
 */

define([
    'crypto'
], function (crypto) {
    'use strict';

    var md5 = function (code) {
        return crypto.createHash('md5').update(code).digest('hex');
    };

    var randomBytes = function (size, callback) {
        return crypto.randomBytes(size, callback).toString('hex');
    };

    var mixSalt = function (code, salt) {
        if (salt) {
            var len = salt.length,
                cut = Math.ceil(len / 2);

            return salt.slice(0, cut) + code + salt.slice(cut, len);
        } else {
            return code;
        }
    };

    return {
        md5: md5,
        randomBytes: randomBytes,
        mixSalt: mixSalt
    };
});