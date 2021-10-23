class SummerCamp{
    constructor(organizer, location){

        this.organizer = organizer;
        this.location  = location;
        this.priceForTheCamp = {

            "child": 150, 
            "student": 300, 
            "collegian": 500
        }

        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){

        if(!this.priceForTheCamp.hasOwnProperty(condition)){
            throw new Error('Unsuccessful registration at the camp.')
        }

        if(money < this.priceForTheCamp[condition]){
            return 'The money is not enough to pay the stay at the camp.'
        }

        let isNameInTheArr = this.listOfParticipants.find(x => x.name == name);

        if(isNameInTheArr){
            return `The ${name} is already registered at the camp.`
        }

        this.listOfParticipants.push( {name, condition, power: 100, wins: 0}  );

        return `The ${name} was successfully registered.`
    }

    unregisterParticipant (name){

        let isNameInTheArr = this.listOfParticipants.find(x => x.name == name);

        if(!isNameInTheArr){
            throw new Error(`The ${name} is not registered in the camp.`)
        }

        let index = this.listOfParticipants.indexOf(isNameInTheArr);

        this.listOfParticipants.splice(index, 1);

        return `The ${name} removed successfully.`
    }

    timeToPlay (typeOfGame, participant1, participant2){

        let isPart1Exist = this.listOfParticipants.find(x => x.name == participant1);
        let isPart2Exist = this.listOfParticipants.find(x => x.name == participant2);

        if(typeOfGame == 'WaterBalloonFights'){

            if(!isPart1Exist || !isPart2Exist){
                throw new Error('Invalid entered name/s.');
            }

            if(isPart1Exist.condition !==  isPart2Exist.condition){
                throw new Error('Choose players with equal condition.')
            }

            if(isPart1Exist.power > isPart2Exist.power){
                isPart1Exist.wins += 1;
                return `The ${isPart1Exist.name} is winner in the game ${typeOfGame}.`
            }else if(isPart2Exist.power > isPart1Exist.power){
                isPart2Exist.wins += 1;
                return `The ${isPart2Exist.name} is winner in the game ${typeOfGame}.`
            }else{
                return 'There is no winner.';
            }
        }

        if(typeOfGame == 'Battleship'){

            if(!isPart1Exist){
                throw new Error('Invalid entered name/s.');
            }

            isPart1Exist.power += 20;

            return `The ${isPart1Exist.name} successfully completed the game ${typeOfGame}.`
        }
    }

    toString(){

        let result = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];

        let sortedArr = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        sortedArr.forEach(x => {
            result.push(`${x.name} - ${x.condition} - ${x.power} - ${x.wins}`)
        })

        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
//console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());



