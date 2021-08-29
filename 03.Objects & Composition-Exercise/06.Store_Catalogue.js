function solve(arr) {
    let collection = {}
    for (let el of arr) {
        let [product, price] = el.split(' : ');
        price = Number(price);
        let char = product[0];
        if(!collection[char]){
            collection[char] = {};
        }
        collection[char][product] = price;
    }
    let sorted = Object.entries(collection).sort((a, b) => a[0].localeCompare(b[0]))
    for (let el of sorted) {
        console.log(el[0]);
        Object.keys(el[1]).sort((a, b) => a.localeCompare(b)).forEach(x => {
            console.log(`  ${x}: ${el[1][x]}`);
        })
    }
}
console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]));