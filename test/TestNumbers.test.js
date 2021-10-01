const testNumbers = require('../Exam Preparation/TestNumbers');
const { expect }  = require('chai');

describe("sumNumbers", function() {
    describe("TODO …", function() {
        it("Should return undefined when the params are not numbers", function() {
            num1 = 'gosho';
            num2 = 'pesho';

            expect(testNumbers.sumNumbers(num1, num2)).to.be.equal(undefined);
        });

        it("Should return undefined when the params are not numbers", function() {
            num1 = {};
            num2 = [];

            expect(testNumbers.sumNumbers(num1, num2)).to.be.equal(undefined);
        });

        it("Should return the correct answer", function() {
            num1 = 5;
            num2 = 10;

            expect(testNumbers.sumNumbers(num1, num2)).to.equal((num1 + num2).toFixed(2));
        });

        it("Should return the correct answer", function() {
            num1 = -5;
            num2 = -10;

            expect(testNumbers.sumNumbers(num1, num2)).to.equal((num1 + num2).toFixed(2));
        });
     });
     
     describe("numberChecker", function() {
        it("Should throw error if isNan", function() {
            let input = Number('gosho');

            expect(() => testNumbers.numberChecker(input)).to.throw();
        });

        it("Should return even number", function() {
            let input = Number('6');

            expect(testNumbers.numberChecker(input)).to.be.equal('The number is even!');
        });

        it("Should return odd number", function() {
            let input = Number('5');

            expect(testNumbers.numberChecker(input)).to.be.equal('The number is odd!');
        });
     });

     describe("averageSumArray", function() {
         it('Should return the proper result', () => {
            let arr = [1,2,3,4,5];
            expect(testNumbers.averageSumArray(arr)).to.be.equal(3);
         })
     })
});
