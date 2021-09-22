const lookupChar = require('../08.Unit Testing and Error Handling - Exercise/03.Char Lookup');
const { assert } = require('chai');

describe('char lookup test', () => {

    it('Should return undefined when first parameter is not equal to string', () => {

        let expectedResult = undefined;
        
        assert.equal(lookupChar(undefined, 1), expectedResult);
        assert.equal(lookupChar(1, 1), expectedResult);
        assert.equal(lookupChar(true, undefined), expectedResult);
    })

    it('Should return undefined when second parameter is not an integer', () => {

        let expectedResult = undefined;
        
        assert.strictEqual(lookupChar('some', 'string'), expectedResult);
        assert.strictEqual(lookupChar('some', 1.39), expectedResult);
        assert.strictEqual(lookupChar('some', true), expectedResult);
        assert.strictEqual(lookupChar('some', null), expectedResult);
        assert.strictEqual(lookupChar('some', '1'), expectedResult);
    })

    it('Should second parameter be in range', () => {

        let expectedResult = 'Incorrect index';
    
        assert.equal(lookupChar('test', 5), expectedResult);
        assert.equal(lookupChar('test', -1), expectedResult);
    })

    it('Should return the char at specified index', () => { 

        assert.equal(lookupChar('test', 1), 'e');
        assert.equal(lookupChar('test', 3), 't');
    })
});

