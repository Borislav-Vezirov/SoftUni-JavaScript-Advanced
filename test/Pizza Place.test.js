const pizzUni    = require('../Exam Preparation/Pizza Place');
const { expect } = require('chai');

describe("pizzUni", function() {
    describe("makeAnOrder", function() {

        it('Should return correctly message for pizza', function() {
            let testObj = {
                orderedPizza: 'Capriccioza'
            }
            expect(pizzUni.makeAnOrder(testObj)).to.be.equal(`You just ordered ${testObj.orderedPizza}`)
        });

        it('Should return correctly message for pizza and drink', function() {
            let testObj = {
                orderedPizza: 'Capriccioza',
                orderedDrink: 'Cola'
            }
            expect(pizzUni.makeAnOrder(testObj)).to.be.equal(`You just ordered ${testObj.orderedPizza} and ${testObj.orderedDrink}.`)
        });

        it('Should return error for empty object', function() {
            let testObj = {
                
            }
            expect(() => pizzUni.makeAnOrder(testObj)).to.throw('You must order at least 1 Pizza to finish the order.')
        });

        it('Should return error for object with only drink', function() {
            let testObj = {
                orderedDrink: 'rakia'
            }
            expect(() => pizzUni.makeAnOrder(testObj)).to.throw();
        });

     });

     describe("getRemainingWork", function() {

        it('Should return correctly message for for pizzas who are ready', function() {
            let arr = [{pizzaName: 'Margarita', status:'ready'}];
            expect(pizzUni.getRemainingWork(arr)).to.be.equal('All orders are complete!')
        });

        it('Should return correctly message for for pizzas who still preparing', function() {
            let arr = [{pizzaName: 'Margarita', status:'preparing'}, {pizzaName: 'Bubi', status:'preparing'}];
            expect(pizzUni.getRemainingWork(arr)).to.be.equal(`The following pizzas are still preparing: Margarita, Bubi.`)
        });
     });

     describe("orderType", function() {

         it('Should return correctly sum for Carry Out order', function() {
            let totalSum    = 10;
            let typeOfOrder = 'Carry Out';
            
            expect(pizzUni.orderType(totalSum, typeOfOrder)).to.be.equal(9)
        });
        it('Should return correctly sum for Carry Out order', function() {
            let totalSum    = 16.3;
            let typeOfOrder = 'Carry Out';
            
            expect(pizzUni.orderType(totalSum, typeOfOrder)).to.be.equal(14.67)
        });

        it('Should return correctly sum for Delivery order', function() {
            let totalSum    = 16.3;
            let typeOfOrder = 'Delivery';

            expect(pizzUni.orderType(totalSum, typeOfOrder)).to.be.equal(16.3)
        });
     });
});
