function solve(arr) {
    let collection = {};
    for (let el of arr) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);
        if(!collection[product]){
            collection[product] = {};
        }
       
        collection[product][town] = price
    }
    let result = []
    for (const key in collection) {
        let sorted = Object.entries(collection[key]).sort((a, b) => a[1] - b[1]);
        result.push(`${key} -> ${sorted[0][1]} (${sorted[0][0]})`); 
    }
    return result.join('\n')
}
console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]));