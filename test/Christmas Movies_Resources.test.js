const ChristmasMovies = require('../Exam Preparation/Christmas Movies_Resources');
const { expect } = require('chai');

describe("ChristmasMovies", function() {
    
    let cm = new ChristmasMovies;
    let actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'];
    
    describe("buyMovie", function() {
        it("TODO 1", function() {
            let name   = 'Home Alone';
            let actors = ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'];

            expect(cm.buyMovie(name, actors)).to.be.equal(`You just got ${name} to your collection in which ${actors.join(', ')} are taking part!`);
        });

        it("TODO 2", function() {
            let name   = 'Home Alone';

            expect(() => cm.buyMovie(name, actors)).to.throw();
        });

        it("TODO 3", function() {
            let name   = 'Home Alone';
            cm.movieCollection = { 'Home Alone': 1, actors }

            expect(() => cm.discardMovie(name)).to.throw();
        });

        // it("TODO 4", function() {
        //     let name   = 'Home Alone';
        //     cm.watchMovie = {'Home Alone': 1}

        //     expect(cm.discardMovie(name)).to.be.equal(`You just threw away ${name}!`)
        // });
     });
     // TODO: …
});
