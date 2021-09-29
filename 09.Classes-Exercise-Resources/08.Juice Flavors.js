function solve(arr) {
    
    let bottles = [];
    let fruitCollection = {};

    for (let el of arr) {
        let [fruit, qty] = el.split(' => ');
        qty = Number(qty);
        if(fruitCollection[fruit] === undefined){
            fruitCollection[fruit] = qty;
        }else{
            fruitCollection[fruit] += qty;
        }

        if(fruitCollection[fruit] >= 1000){
            let bottle = Math.trunc(fruitCollection[fruit] / 1000);
            let float  = fruitCollection[fruit] % 1000;
    
            let isInArray = false;
            bottles.map(x => {
                if(x[fruit] !== undefined){
                    x[fruit] += bottle;
                    isInArray = true;
                }
            })
            
            if(!isInArray){
                bottles.push({[fruit]: bottle});
            }

            if(float !== undefined){
                fruitCollection[fruit] = float;
            }else{
                fruitCollection[fruit] = 0
            }
        }
    }
    let result = '';
    bottles.map(x => Object.keys(x).forEach(el => result += `${el} => ${x[el]}\n`));
    return result
}
console.log(solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
));