function solve(obj) {
    if(obj.dizziness === true){
        let temp = (obj.weight * 0.1) * obj.experience;
        obj.levelOfHydrated += temp;
        obj.dizziness = false;
        return obj;
    }else{
        return obj;
    }
}
console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));