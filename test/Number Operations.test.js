let numberOperations = require('../Exam Preparation/Number Operations');
let { expect } = require('chai');

describe("numberOperations", function() {
    describe("powNumber", function() {
        it("Should return the proper result", function() {
            let num = 10;
            expect(numberOperations.powNumber(num)).to.be.equal(100);
        });
     });
     describe("numberChecker", function() {
        it("Should throw an error if input is not a number", function() {
            let input = 'pesho';
            expect(() => numberOperations.numberChecker(input)).to.throw('The input is not a number!')
        });

        it("Should return proper message for input lower then 100", function() {
            let input = 99;
            expect(numberOperations.numberChecker(input)).to.be.equal('The number is lower than 100!')
        });
        it("Should return proper message for input higher or equal then 100", function() {
            let input = 100;
            expect(numberOperations.numberChecker(input)).to.be.equal('The number is greater or equal to 100!')
        });
     });

     describe("sumArrays", function() {
        it("Should return the proper result", function() {
            let arr1 = [1,2,3,4];
            let arr2 = [5,6,7,8,9,10];
            let expected = [6,8,10,12,9,10];
            expect(numberOperations.sumArrays(arr1, arr2)).to.be.eql(expected);
        });
        it("Should return the proper result", function() {
            let arr1 = [1,2,3,4];
            let arr2 = [5,6,7,8];
            let expected = [6,8,10,12];
            expect(numberOperations.sumArrays(arr1, arr2)).to.be.eql(expected);
        });
     });
});
