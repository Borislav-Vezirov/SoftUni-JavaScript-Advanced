class ChristmasDinner {
    constructor(budget){
        if(Number(budget) < 0){
            throw new Error('The budget cannot be a negative number');
        }
        this.budget   = budget;
        this.dishes   = [];
        this.products = [];
        this.guests   = {};
    }

    shopping(product){
        
        let [type, price] = product;
        price = Number(price);
        if(price > this.budget){
            throw new Error('Not enough money to buy this product');
        }

        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`;
    }

    recipes(recipe){
        let productsArr = recipe.productsList;
        for (const el of productsArr) {
            if(!this.products.includes(el)){
                throw new Error('We do not have this product')
            }
        }

        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`
    }
    
    inviteGuests(name, dish){
        let isDishIsInArray = false
        this.dishes.map(x => {
            if(x.recipeName === dish){
                isDishIsInArray = true;
            }
        });

        if(!isDishIsInArray){
            throw new Error('We do not have this dish')
        };
        if(name in this.guests){
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish;
        
        return `You have successfully invited ${name}!`
    }

    showAttendance(){

        let result = '';

        Object.keys(this.guests)
        .forEach(guest => {
            let dish = this.guests[guest];
            let products = [];
            this.dishes.map(el => {
                if(el.recipeName === dish){
                    products = el.productsList;
                }
            })
            result += `${guest} will eat ${dish}, which consists of ${products.join(', ')}\n`;
        })

        return result.trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

