class VeterinaryClinic{
    constructor (clinicName, capacity){
        this.clinicName = clinicName;
        this.capacity   = capacity;
        this.clients    = [];
        this. totalProfit = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures){

        if(this.clients.length >= this.capacity){
            throw new Error('Sorry, we are not able to accept more patients!');
        }

        

        let obj = {name: ownerName, pets: []}
    }


}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
// console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
// console.log(clinic.toString());
// clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
// console.log(clinic.toString());