/*
 * Copyright (c) 2018. Yuriy Stul 
 */
'use strict';

function f1() {
    console.log("==>f1");
    return 123
}

function f2(k) {
    console.log("==>f");
    return 123 * k
}

module.exports = {
    f1: f1,
    f2: f2
};