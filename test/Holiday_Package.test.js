const holidayPackage = require ('../Exam Preparation/Holiday_Package');
const {expect} = require ('chai');

describe('holidayPackage', () => {
    describe('showVacationers', () => {
        it('Should return vacationers', () => {
            this.vacationers = ['bobi', 'asia', 'alex'];

            expect(holidayPackage.showVacationers).to.be.equal(this.vacationers.join(', '));
        })
    })
})