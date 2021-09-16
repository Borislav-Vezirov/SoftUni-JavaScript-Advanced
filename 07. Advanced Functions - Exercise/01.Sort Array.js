function solve(arr, param) {
    return param === 'asc' 
    ? arr.sort((a, b) => a - b)
    : arr.sort((a, b) => b - a);
}
console.log(solve([14, 7, 17, 6, 8], 'desc'));