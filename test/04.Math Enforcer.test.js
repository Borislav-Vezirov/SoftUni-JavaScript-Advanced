const mathEnforcer = require('../08.Unit Testing and Error Handling - Exercise/04.Math Enforcer');
const { assert }   = require('chai');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('AddFive method should return undefined or add 5 to number', () => {

            assert.strictEqual(mathEnforcer.addFive('str'), undefined);
            assert.strictEqual(mathEnforcer.addFive(undefined), undefined);
            assert.strictEqual(mathEnforcer.addFive(null), undefined);
    
            assert.strictEqual(mathEnforcer.addFive(5), 10);
            assert.strictEqual(mathEnforcer.addFive(-7), -2);
            assert.strictEqual(mathEnforcer.addFive(1.1), 6.1, 0.01);
        })
    })

    describe('subtractTen', () => {
        it('subtractTen method should return undefined or subtract 10 from the number', () => {

            assert.strictEqual(mathEnforcer.subtractTen('str'), undefined);
            assert.strictEqual(mathEnforcer.subtractTen(undefined), undefined);
            assert.strictEqual(mathEnforcer.subtractTen(null), undefined);
    
            assert.strictEqual(mathEnforcer.subtractTen(15), 5);
            assert.strictEqual(mathEnforcer.subtractTen(-30), -40);
            assert.strictEqual(mathEnforcer.subtractTen(5.1), -4.9, 0.01);
        })
    })

    describe('sum', () => {
        it('sum method should return undefined or the sum of parameters', () => {

            assert.strictEqual(mathEnforcer.sum('str', 1), undefined);
            assert.strictEqual(mathEnforcer.sum(1, 'str'), undefined);
            assert.strictEqual(mathEnforcer.sum(null, undefined), undefined);
            assert.strictEqual(mathEnforcer.sum('str', 'some'), undefined);
    
            assert.strictEqual(mathEnforcer.sum(5.5, 5.5), 11);
            assert.strictEqual(mathEnforcer.sum(50, 10), 60);
            assert.strictEqual(mathEnforcer.sum(-5, -5), -10);
            assert.closeTo(mathEnforcer.sum(1.5, 1), 2.5, 0.01);
      
        })
    })
})
