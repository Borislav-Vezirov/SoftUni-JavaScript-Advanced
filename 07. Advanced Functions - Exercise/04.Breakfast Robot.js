function solve() {
    let stock = {   
        protein     : 0,
        carbohydrate: 0,
        fat         : 0,
        flavour     : 0
    }

    let orders = {
        apple: {
            carbohydrate: 1,
            flavour     : 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour     : 20
        },
        burger: {
            carbohydrate: 5,
            flavour     : 3,
            fat         : 7
        },
        eggs: {
            protein: 5,
            flavour: 1,
            fat    : 1
        },
        turkey: {
            carbohydrate: 10,
            flavour     : 10,
            fat         : 10,
            protein     : 10
        }
    }

    let commands = {
        restock: (element, qty) => {
            stock[element] += Number(qty);
            return 'Success';
        },
        prepare: (recipe, quantity) => {
            quantity = Number(quantity);
            let ingredients = Object.entries(orders[recipe]);
            for (const [item, qty] of ingredients) {
                if(stock[item] < Number(qty) * quantity){
                    return `Error: not enough ${item} in stock`
                }
            }

            ingredients.forEach(x => {
                stock[x[0]] -= x[1] * quantity;
            })
            return 'Success'
        },
        report: () => {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
        }
    }

    return (input) => {
        let [command, element, qty] = input.split(' ');
        return commands[command](element, Number(qty));
    }
}
let manager = solve(); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));
console.log (manager ("prepare turkey 1"));

