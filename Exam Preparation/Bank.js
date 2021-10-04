class Bank{
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(name){
        this.allCustomers.map(x => {
            if(x.firstName === name.firstName && x.lastName === name.lastName){
                throw new Error(`${x.firstName} ${x.lastName} is already our customer!`)
            }
        })
        this.allCustomers.push(name);
        return name;
    }

    depositMoney(personalId, amount){
        let money = 0;
        let isAllreadyCustomer = false;
        this.allCustomers.map(x => {
            if(x.personalId === personalId){
                x.totalMoney ? x.totalMoney += amount : x.totalMoney = amount;
                x.transactions ? x.transactions.unshift(`made deposit of ${amount}`) : x.transactions = [`made deposit of ${amount}`];
                isAllreadyCustomer = true;
                money = x.totalMoney;
            }
        })
        if(!isAllreadyCustomer){
            throw new Error(`We have no customer with this ID!`);
        }else{
            return `${money}$`;
        }
    }

    withdrawMoney(personalId, amount){
        let money = 0;
        let isAllreadyCustomer = false;
        this.allCustomers.map(x => {
            if(x.personalId === personalId){
                if(x.totalMoney >= amount){
                    x.totalMoney -= amount;
                    x.transactions.unshift(`withdrew ${amount}`);
                    isAllreadyCustomer = true;
                    money = x.totalMoney;
                }else{
                    throw new Error(`${x.firstName} ${x.lastName} does not have enough money to withdraw that amount!`)
                }
            }
        });

        if(!isAllreadyCustomer){
            throw new Error(`We have no customer with this ID!`);
        }else{
            return `${money}$`;
        }
    }

    customerInfo(personalId){
        let result = '';
        let isAllreadyCustomer = false;
        this.allCustomers.forEach(x => {

            if(x.personalId === personalId){

                result += `Bank name: ${this._bankName}\n`;
                result += `Customer name: ${x.firstName} ${x.lastName}\n`;
                result += `Customer ID: ${x.personalId}\n`;
                result += `Total Money: ${x.totalMoney}$\n`;
                result += `Transactions:\n`;
                let count = x.transactions.length;
                for (const t of x.transactions) {
                    result += `${count}. ${x.firstName} ${x.lastName} ${t}$!\n`
                    count--;
                }

                isAllreadyCustomer = true;
            }
        });

        if(!isAllreadyCustomer){
            throw new Error(`We have no customer with this ID!`);
        }

        return result.trim();
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

