class Movie{
    constructor(movieName, ticketPrice){
        this.movieName   = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings  = [];
        this._totalProfit = 0;
        this._totalTicketsSold = 0;
    }

    newScreening(date, hall, description){
        
        let isBusy = this.screenings.find(x => x.date === date && x.hall === hall);

        if(isBusy){
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }

        let obj = { date, hall, description };

        this.screenings.push(obj);

        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets){

        let isBusy = this.screenings.find(x => x.date === date && x.hall === hall);

        if(!isBusy){
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        let currentProfit = soldTickets * Number(this.ticketPrice);

        this._totalProfit += currentProfit;

        this._totalTicketsSold += soldTickets;

        for (let el of this.screenings) {
            if(el.date === date && el.hall === hall){
                let index = this.screenings.indexOf(el);
                this.screenings.splice(index, 1);
            }
        }

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`
    } 

    toString(){

        let result = '';
        
        result += `${this.movieName} full information:\n`;

        result += `Total profit: ${(this._totalProfit).toFixed(0)}$\nSold Tickets: ${(this._totalTicketsSold).toFixed(0)}\n`;

        if(this.screenings.length > 0){
            result += `Remaining film screenings:\n`;
            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall))
            .forEach(x => {
                result += `${x.hall} - ${x.date} - ${x.description}\n`
            })
            return result.trim();
        }else{

            result += 'No more screenings!';

            return result.trim();
        }
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
