function solve(str) {
    let m = str.split(/\W/g).filter(x => x.length >= 1).map(x => x.toUpperCase());
    return m.join(', ')
}
console.log(solve('Functions in JS can be nested, i.e. hold other functions'));