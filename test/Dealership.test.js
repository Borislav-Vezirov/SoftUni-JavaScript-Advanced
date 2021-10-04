const dealership = require('../Exam Preparation/Dealership');
const { expect } = require('chai');

describe("dealership", function() {
    describe("dealership", function() {

        it("Should return proper message for old car", function() {
            let string = 'Audi A4 B8';
            let number = 50000;
            expect(dealership.newCarCost(string, number)).to.be.equal(35000);
        });

        it("Should return proper message for price without discount", function() {
            let string = 'passat';
            let number = 50000;
            expect(dealership.newCarCost(string, number)).to.be.equal(50000);
        });
     });

     describe("carEquipment", function() {

        it("Should return proper array", function() {
            let arr1 = ["heated seats", 'sliding roof', 'sport rims', 'navigation']
            let arr2 = [1, 3];
            let result = ['sliding roof', 'navigation']
            expect(dealership.carEquipment(arr1, arr2)).to.be.eql(result);
        });
     })

     describe("euroCategory", function() {

        it("Should return proper message for higher number", function() {
            let number = 5
            let result = `We have added 5% discount to the final price: ${14250}.`
            expect(dealership.euroCategory(number)).to.be.eql(result);
        });

        it("Should return proper message for higher number", function() {
            let number = 4
            let result = `We have added 5% discount to the final price: ${14250}.`
            expect(dealership.euroCategory(number)).to.be.eql(result);
        });

        it("Should return proper message for smaller number", function() {
            let number = 3
            let result = `Your euro category is low, so there is no discount from the final price!`
            expect(dealership.euroCategory(number)).to.be.eql(result);
        });
     })
});
