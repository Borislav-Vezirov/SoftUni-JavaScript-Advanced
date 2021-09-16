function solve(...arr) {
    let result = {};
    for (const el of arr) {
        let type = typeof el;
        console.log(`${type}: ${el}`);
        result[type] = result[type] ? result[type] += 1 : 1;
    }
    Object.keys(result).sort((a, b) => result[b] - result[a])
    .forEach(x => {
        console.log(`${x} = ${result[x]}`);
    })
}
solve('cat',22, 42, function () { console.log('Hello world!'); })