class Parking{
    constructor(capacity){
        this.capacity = Number(capacity);
        this.vehicles = [];
    }

    addCar(carModel, carNumber){
        if(this.vehicles.length >= this.capacity){
            throw new Error('Not enough parking space.')
        }
        this.vehicles.push({carModel, carNumber, payed: false});
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar(carNumber){

        let currentCar = this.findCar(carNumber);

        if(!currentCar){
            throw new Error('The car, you\'re looking for, is not found.')
        }
        if(currentCar.payed == false){
            throw new Error(`${currentCar.carNumber} needs to pay before leaving the parking lot.`)
        }
        this.vehicles = this.vehicles.filter(x => x.carNumber !== currentCar.carNumber);
        return `${currentCar.carNumber} left the parking lot.`
    }

    pay(carNumber){
        let currentCar = this.findCar(carNumber);

        if(!currentCar){
            throw new Error(`${carNumber} is not in the parking lot.`)
        }

        if(currentCar.payed === true){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }

        currentCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber){

        let result = '';

        if(carNumber === undefined){

            result += `The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.\n`

            this.vehicles.sort((a, b) => {
                return a.carModel.localeCompare(b.carModel);
            })
            .forEach(x => {
                result += `${x.carModel} == ${x.carNumber} - `;
                result += x.payed === false ? 'Not payed' : 'Has payed'
            });
            return result;
        }
        let currentCar = this.findCar(carNumber);
        return `${currentCar.carModel} == ${currentCar.carNumber} - ${currentCar.payed === true ? 'Has payed' : 'Not payed'}`
    }

    findCar(carNumber){
        let currentCar = this.vehicles.find(x => x.carNumber === carNumber); 
        return currentCar;
    }
}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
