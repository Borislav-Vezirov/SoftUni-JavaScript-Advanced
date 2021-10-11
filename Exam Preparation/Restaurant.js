class Restaurant{
    constructor(budgetMoney ){
        this.budgetMoney = Number(budgetMoney );
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products){

        for (const el of products) {
            let [productName, productQuantity, productTotalPrice] = el.split(' ');
            productQuantity   = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if(productTotalPrice <= this.budgetMoney){
                
                if(this.stockProducts[productName] == undefined){
                    this.stockProducts[productName] = productQuantity
                }

                this.stockProducts[productName] += productQuantity

                this.budgetMoney -= productTotalPrice;

                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            }else{
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, neededProducts, price){
    
        price = Number(price);

        if(this.menu[meal] === undefined){

            this.menu[meal] = {neededProducts: {}, price}

            for (let el of neededProducts) {
                let [name, qty] = el.split(' ');
                qty = Number(qty);
                this.menu[meal].neededProducts[name] = qty; 
            }

            let menuArr = Object.keys(this.menu);
            
            if(menuArr.length === 1){
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }else{
                return `Great idea! Now with the ${meal} we have ${menuArr.length} meals in the menu, other ideas?`
            }
        }

        return `The ${meal} is already in the our menu, try something different.`
    }

    showTheMenu(){

        let result = '';
        for (const key in this.menu) {
            result += `${key} - $ ${this.menu[key].price}\n`;
        }

        if(result.length === 0){
            return `Our menu is not ready yet, please come later...`
        }else{
            return result;
        }
    }

    makeTheOrder(meal){
        
        if(this.menu[meal] === undefined){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }

        let productsArr = Object.entries(this.menu[meal].neededProducts);

        for (const el of productsArr) {

            if(this.stockProducts[el[0]] === undefined){

                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        }

        for (const el of productsArr) {
            el[1] = Number(el[1]);
            this.stockProducts[el[0]] -= el[1];
            this.budgetMoney += this.menu[meal].price;
        }
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
    }
}

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

