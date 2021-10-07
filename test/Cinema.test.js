const cinema = require('../Exam Preparation/Cinema');
const { expect } = require('chai');

describe("Cinema", function() {
    describe("showMovies", function() {
        it("Should return error for empty array", function() {
            let arr = [];
            expect(cinema.showMovies(arr)).to.be.equal('There are currently no movies to show.') 
        });

        it("Should return the movies separated by coma", function() {
            let arr = ['King Kong', 'The Tomorrow War', 'Joker'];
            let result = arr.join(', ');
            expect(cinema.showMovies(arr)).to.be.equal(result); 
        });
     });

     describe("ticketPrice", function() {
        it("Should return proper price for right projectionType", function() {
            let str = 'Premiere'
            expect(cinema.ticketPrice(str)).to.be.equal(12); 
        });

        it("Should return proper price for right projectionType", function() {
            let str = 'Normal'
            expect(cinema.ticketPrice(str)).to.be.equal(7.5); 
        });

        it("Should return proper price for right projectionType", function() {
            let str = 'Discount'
            expect(cinema.ticketPrice(str)).to.be.equal(5.5); 
        })

        it("Should throw an error for invalid type", function() {
            let str = 'pesho'
            expect(() => cinema.ticketPrice(str)).to.throw('Invalid projection type.'); 
        });

        it("Should throw an error for invalid type", function() {
            let str = 5
            expect(() => cinema.ticketPrice(str)).to.throw('Invalid projection type.'); 
        });
     });

     describe("swapSeatsInHall", function() {
        it("Should be unsuccessful if one of two numbers does not exist", function() {
            let num1 = 5;
            let num2 = 10;
            expect(cinema.swapSeatsInHall(num1)).to.be.equal('Unsuccessful change of seats in the hall.'); 
        });

        it("Should be unsuccessful if one of two numbers does not exist", function() {
            let num1 = 5;
            let num2 = 10;
            expect(cinema.swapSeatsInHall(num2)).to.be.equal('Unsuccessful change of seats in the hall.'); 
        });

        it("Should be unsuccessful if the number are not integers", function() {
            let num1 = 5.9;
            let num2 = 11.5;
            expect(cinema.swapSeatsInHall(num1, num2)).to.be.equal('Unsuccessful change of seats in the hall.'); 
        });

        it("Should be unsuccessful if the number are not integers", function() {
            let num1 = 5;
            let num2 = 11.5;
            expect(cinema.swapSeatsInHall(num1, num2)).to.be.equal('Unsuccessful change of seats in the hall.'); 
        });

        it("Should be unsuccessful if the number are not integers", function() {
            let num1 = 5.9;
            let num2 = 11;
            expect(cinema.swapSeatsInHall(num1, num2)).to.be.equal('Unsuccessful change of seats in the hall.'); 
        });

        it("Should be unsuccessful if the number are not integers", function() {
            let num1 = NaN;
            let num2 = 11;
            expect(cinema.swapSeatsInHall(num1, num2)).to.be.equal('Unsuccessful change of seats in the hall.'); 
        });
        
        it("Should be unsuccessful if the number are not integers", function() {
            let num1 = 6;
            let num2 = '11';
            expect(cinema.swapSeatsInHall(num1, num2)).to.be.equal('Unsuccessful change of seats in the hall.'); 
        });

        it("Should be unsuccessful if the number are not integers", function() {
            let num1 = true;
            let num2 = [11];
            expect(cinema.swapSeatsInHall(num1, num2)).to.be.equal('Unsuccessful change of seats in the hall.'); 
        });

        it("Should be unsuccessful if one number are above 20", function() {
            let num1 = 5;
            let num2 = 21;
            expect(cinema.swapSeatsInHall(num1, num2)).to.be.equal('Unsuccessful change of seats in the hall.'); 
        });

        it("Should be unsuccessful if one number are above 20", function() {
            let num1 = 31;
            let num2 = 20;
            expect(cinema.swapSeatsInHall(num1, num2)).to.be.equal('Unsuccessful change of seats in the hall.'); 
        });

        it("Should be unsuccessful if seats are less or equal 0", function() {
            let num1 = -5;
            let num2 = 1;
            expect(cinema.swapSeatsInHall(num1, num2)).to.be.equal('Unsuccessful change of seats in the hall.'); 
        });

        it("Should be unsuccessful if seats are less or equal 0", function() {
            let num1 = 5;
            let num2 = -1;
            expect(cinema.swapSeatsInHall(num1, num2)).to.be.equal('Unsuccessful change of seats in the hall.'); 
        });

        it("Should return successful message", function() {
            let num1 = 5;
            let num2 = 15;
            expect(cinema.swapSeatsInHall(num1, num2)).to.be.equal('Successful change of seats in the hall.'); 
        });
     });
});
