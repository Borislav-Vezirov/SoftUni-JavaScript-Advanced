const library = require('./library');
const { expect } = require('chai');

describe("library", function() {
    describe("calcPriceOfBook", function() {
        it("check inputs #1", function() {
             
            expect(() => library.calcPriceOfBook(45, 'pesho')).to.throw();
        });

        it("check inputs #1", function() {
             
            expect(() => library.calcPriceOfBook('pesho', true)).to.throw();
        });

        it("check inputs #1", function() {
             
            expect(() => library.calcPriceOfBook(true, 1985)).to.throw();
        });

        it("check inputs #10", function() {
             
            expect(() => library.calcPriceOfBook('pesho')).to.throw();
        });

        it("check inputs #10", function() {
             
            expect(() => library.calcPriceOfBook(1985)).to.throw();
        });

        it("check inputs #1.1", function() {
             
            expect(() => library.calcPriceOfBook(null, 'pesho')).to.throw();
        });

        it("check inputs #1.2", function() {
             
            expect(() => library.calcPriceOfBook([], 'pesho')).to.throw();
        });

        it("check inputs #1.3", function() {
             
            expect(() => library.calcPriceOfBook({}, 'pesho')).to.throw();
        });

        it("check inputs #2", function() {
             
            expect(() => library.calcPriceOfBook('pesho', '1985.5')).to.throw();
        });

        it("check inputs #2.1", function() {
             
            expect(() => library.calcPriceOfBook('pesho', 0.1985)).to.throw();
        });

        it("check inputs #2.2", function() {
             
            expect(() => library.calcPriceOfBook('pesho', undefined)).to.throw();
        });

        it("check inputs #2.3", function() {
             
            expect(() => library.calcPriceOfBook('pesho', {})).to.throw();
        });

        it("check inputs #2.4", function() {
             
            expect(() => library.calcPriceOfBook('pesho', null)).to.throw();
        });

        it("check inputs #3", function() {
             
            expect(() => library.calcPriceOfBook(undefined, '1985')).to.throw();
        });

        it("check inputs #4", function() {
             
            expect(() => library.calcPriceOfBook('pesho', [])).to.throw();
        });

        it("check inputs #5", function() {
             
            expect(library.calcPriceOfBook('pesho', 1980)).to.be.equal('Price of pesho is 10.00')
        });

        it("check inputs #6", function() {
             
            expect(library.calcPriceOfBook('pesho', 1979)).to.be.equal('Price of pesho is 10.00')
        });

        it("check inputs #6", function() {
             
            expect(library.calcPriceOfBook('pesho', 1981)).to.be.equal('Price of pesho is 20.00')
        });

        it("check inputs #6", function() {
             
            expect(library.calcPriceOfBook('sdfgdf', 2021)).to.be.equal('Price of sdfgdf is 20.00')
        });
     });

     describe("findBook", function() {
        it("is array is equal to zero", function() {
             let arr = [];

             expect(() => library.findBook(arr, 'pesho')).to.throw();
        });

        it("is array is missing", function() {
            let arr = [];

            expect(() => library.findBook('pesho')).to.throw();
       });

        it("Should return wrong book in the array", function() {
            let arr = ["Troy", "Life Style", "Torronto"];

            expect(library.findBook(arr, 'pesho')).to.be.equal('The book you are looking for is not here!');
        });

        it("Should return right book in the array", function() {
            let arr = ["Troy", "Life Style", "Torronto"];

            expect(library.findBook(arr, 'Torronto')).to.be.equal('We found the book you want.');
       });
     })

     describe("arrangeTheBooks", function(){
         it("Should throw an error for invalid input #1", function(){

            expect(() => library.arrangeTheBooks('pesho')).to.throw();
         })

         it("Should throw an error for invalid input #2", function(){

            expect(() => library.arrangeTheBooks(-5)).to.throw();
         })

         it("Should throw an error for invalid input #3", function(){

            expect(() => library.arrangeTheBooks(5.6)).to.throw();
         })

         it("Should throw an error for invalid input #4", function(){

            expect(() => library.arrangeTheBooks()).to.throw();
         })

         it('Should return the proper message', function(){

            expect(library.arrangeTheBooks(39)).to.be.equal(`Great job, the books are arranged.`)
         })

         it('Should return the proper message', function(){

            expect(library.arrangeTheBooks(40)).to.be.equal(`Great job, the books are arranged.`)
         })

         it('Should return the proper message', function(){

            expect(library.arrangeTheBooks(41)).to.be.equal(`Insufficient space, more shelves need to be purchased.`)
         })
     })
});
