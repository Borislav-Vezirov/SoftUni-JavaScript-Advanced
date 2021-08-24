function solve(arr) {
    let result = [];
    arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
    .forEach(x => result.push(x));
    return result.join('\n')
}
console.log(solve(['test', 
'Deny', 
'omen', 
'Default']
));