class VeterinaryClinic{
    constructor (clinicName, capacity){

        this.clinicName      = clinicName;
        this.capacity        = capacity;
        this.clients         = [];
        this.totalProfit     = 0;
        this.currentWorkload = 0;
    }

    newCustomer(ownerName, petName, kind, procedures){

        if(this.clients.length >= this.capacity){
            throw new Error('Sorry, we are not able to accept more patients!');
        }

        let isAllreadyAClient = this.clients.find(x => x.ownerName === ownerName);

        if(isAllreadyAClient){
            let isPetRegister = isAllreadyAClient.pets.find(x => x.petName === petName);

            if(isPetRegister && isPetRegister.procedures.length > 0){

                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${isPetRegister.procedures.join(', ')}.`)
            }else{

                isAllreadyAClient.pets.push( {petName, kind, procedures} );

                this.currentWorkload ++;

                return `Welcome ${petName}!`
            }
        }

        let obj = {ownerName, pets: [{petName, kind, procedures}] }

        this.clients.push(obj);

        this.currentWorkload ++;

        return `Welcome ${petName}!`
    }

    onLeaving (ownerName, petName) {

        let isClientInTheArray = this.clients.find(x => x.ownerName === ownerName);

        if(!isClientInTheArray){
            throw new Error('Sorry, there is no such client!');
        }

        let isPetIsInTheArray = isClientInTheArray.pets.find(x => x.petName == petName && x.procedures.length > 0);

        if(!isPetIsInTheArray){
            throw new Error(`Sorry, there are no procedures for ${petName}!`)
        }

        this.totalProfit += isPetIsInTheArray.procedures.length * 500;
        
        isPetIsInTheArray.procedures = [];

        this.currentWorkload --;

        return `Goodbye ${petName}. Stay safe!`
    }

    toString(){
        let result = [];
        
        let percentage = Math.floor((this.currentWorkload / this.capacity) * 100)
        
        result.push(`${this.clinicName} is ${percentage}% busy today!`);

        result.push(`Total profit: ${this.totalProfit.toFixed(2)}$`);

        let sortedOwners = this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));

        sortedOwners.map(x => {
            return x.pets.sort((a, b) => a.petName.localeCompare(b.petName))
        })

        sortedOwners.forEach(x => {
            result.push(`${x.ownerName} with:`)
            x.pets.forEach(el => {
                result.push(`---${el.petName} - a ${(el.kind).toLowerCase()} that needs: ${el.procedures.join(`, `)}`)
            })
        })

        return result.join('\n');
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
console.log(clinic.toString());
