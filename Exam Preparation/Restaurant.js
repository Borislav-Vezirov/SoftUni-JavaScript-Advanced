class Restaurant{
    constructor(budgetMoney){
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(arr){
        let result = '';

        for (const el of arr) {

            let [product, quantity, price] = el.split(' ').map(x => isNaN(Number(x)) ? x : Number(x));

            if(price > this.budgetMoney){
                result += `There was not enough money to load ${quantity} ${product}\n`;
            }else{

                if(this.stockProducts[product] === undefined){
                    this.stockProducts[product] = quantity;
                }
                this.stockProducts[product] += quantity;
                this.budgetMoney -= price;
                result += `Successfully loaded ${quantity} ${product}\n`;
            }
        }
        return result;
    }

    addToMenu(meal, neededProducts, price){
        if(this.menu[meal]){
            return `The ${meal} is already in the our menu, try something different.`
        }

        this.menu[meal] = {products: {}, price}

        for (const el of neededProducts) {
            let [product, qty] = el.split(' ');
            qty = Number(qty);
            this.menu[meal].products[product] = qty
        }
        let objLength = Object.keys(this.menu);
        if(objLength.length == 1){
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }else{
            return `Great idea! Now with the ${meal} we have ${objLength.length} meals in the menu, other ideas?`
        }
    }

    showTheMenu(){
        let result = ''
        let arrOfObj = Object.entries(this.menu);
        if(arrOfObj.length == 0){
            return 'Our menu is not ready yet, please come later...'
        }
        arrOfObj.forEach(x => result += `${x[0]} - $ ${x[1].price}\n`);
        return result
    }

    makeTheOrder(meal){
        if(!this.menu[meal]){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let getProducts = Object.entries(this.menu[meal].products);
 
        for (const el of getProducts) {
            let [product, qty] = el;
            if(!this.stockProducts[product]){
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
            this.stockProducts[product] -= qty;
        }
        this.budgetMoney += this.menu[meal].price
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));



//Your order (frozenYogurt) will be completed in the next 30 minutes and will cost you 9.99.

