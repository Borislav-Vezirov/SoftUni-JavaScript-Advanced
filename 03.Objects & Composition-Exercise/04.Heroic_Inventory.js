function solve(arr) {
    let heroes = []
    for (let el of arr) {

        let [name, level, items] = el.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        heroes.push({name, level, items})
    }
    return JSON.stringify(heroes)
}
console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));