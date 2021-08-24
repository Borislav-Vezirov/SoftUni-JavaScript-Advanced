function solve(arr) {
    let result = [];
    arr.sort((a, b) => a.localeCompare(b))
        .forEach((x, i) => {
            result.push(`${i + 1}.${x}`); 
        })
    return result.join('\n')
}
console.log(solve(["John", "Bob", "Christina", "Ema"]));