/*
 * Copyright (c) 2018. Yuriy Stul
 */
'use strict';
const index = require('../index');
const should = require('chai').should();

describe('index', () => {
    describe('#f1', () => {
        it('should return 123', () => {
            const result = index.f1();
            result.should.equal(123)
        })
    });

    describe('#f2', () => {
        it('should return 246', () => {
            const result = index.f2(2);
            result.should.equal(246)
        })
    })
});