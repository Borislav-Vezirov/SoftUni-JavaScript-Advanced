const isOddOrEven  = require('../08.Unit Testing and Error Handling - Exercise/02.Even or Odd') ;
const { assert } = require('chai');

describe('Test is even or odd', () => {

    it('Should return undefined', () => {
        let expected = undefined;

        assert.equal(isOddOrEven([]), expected);
        assert.equal(isOddOrEven(1), expected);
        assert.equal(isOddOrEven(null), expected);
        assert.equal(isOddOrEven(undefined), expected);
        assert.equal(isOddOrEven(true), expected);
    })
    

    it('Should return even', () => {
        let actual       = isOddOrEven('even');
        let secondActual = isOddOrEven('aabbcc')
        
        let expected = 'even';
        
        assert.equal(actual, expected);
        assert.equal(secondActual, expected);
    })

    it('Should return odd', () => {
        let actual       = isOddOrEven('odd');
        let secondActual = isOddOrEven('aabbc')
        
        let expected = 'odd';
        
        assert.equal(actual, expected);
        assert.equal(secondActual, expected);
    })
});