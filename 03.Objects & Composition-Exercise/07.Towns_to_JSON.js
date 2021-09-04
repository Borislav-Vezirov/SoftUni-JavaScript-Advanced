function solve(arr) {
    let titles = extractElements(arr.shift());
    let row = arr.
    map(x => extractElements(x).reduce((acc, el, i) => {
        acc[titles[i]] = el;
        return acc
    }, {}))

    return JSON.stringify(row);

    function extractElements(str) {
        return str. 
        split('|').
        map(x => x.trim()).
        filter(x => x !== '').
        map(x => isNaN(Number(x)) ? x : Number(Number(x).toFixed(2)))
    }
}
console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]));

console.log((solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
)));