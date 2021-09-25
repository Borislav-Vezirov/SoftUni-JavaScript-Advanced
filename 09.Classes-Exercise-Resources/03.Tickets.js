function solve(arr, sortCriteria) {

    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price       = price;
            this.status      = status;
        }
    }
    
    let collection = [];

    for (let el of arr) {
        
        let [destination, price, status] = el.split('|').map(x => x = isNaN(Number(x)) ? x : Number(x));
        let ticket = new Ticket(destination, price, status);
        collection.push(ticket);
    }
    collection.sort((a, b) => {
        if(sortCriteria !== 'price'){
            return a[sortCriteria].localeCompare(b[sortCriteria]);
        }else{
            return a[sortCriteria] - b[sortCriteria]
        }
    });
    
    return collection;
}
console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|available',
'Philadelphia|132.20|departed',
'Chicago|140.20|available',
'Dallas|144.60|sold',
'New York City|206.20|sold',
'New York City|240.20|departed',
'New York City|305.20|departed'],
'price'));