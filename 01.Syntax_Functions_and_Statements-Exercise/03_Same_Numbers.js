function solve(n) {
    let arr = n.toString().split('').map(Number)
    console.log([... new Set(arr)].length === 1);
    return arr.reduce((a, b) => a + b);
}
console.log(solve(2222222));