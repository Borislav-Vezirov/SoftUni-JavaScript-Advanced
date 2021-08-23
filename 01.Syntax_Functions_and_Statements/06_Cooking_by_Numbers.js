function solve() {
    let obj = arguments;
    let arr = []
    for (let key in obj) {
        arr.push(obj[key])
    }
    let n = Number(arr.shift());
    let result = []
    for (let el of arr) {
        if (el === 'dice') {
            n = Math.sqrt(n);
            result.push(n);
        } else if (el === 'spice') {
            n += 1
            result.push(n);
        } else if (el === 'chop') {
            n /= 2
            result.push(n);
        } else if (el === 'bake') {
            n *= 3
            result.push(n);
        } else if (el === 'fillet') {
            n *= 0.8
            result.push(n.toFixed(1));
        }
    }
    return result.join('\n');
}
console.log(solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));