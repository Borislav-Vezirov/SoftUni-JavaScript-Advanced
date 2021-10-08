function solve(steps, stepsLength, km) {

    let distance = steps * stepsLength;
    let speed = km / 3.6;
    let time = distance / speed;
    let rest = Math.floor(distance / 500);
 
 
    let timeInMin = Math.floor(time / 60);
    let timeInSec = Math.round(time - (timeInMin *60));
    let timeInHours = Math.floor(time/3600);

    let result = (timeInHours < 10 ? "0" : "") + timeInHours + ":" + (timeInMin + rest < 10 ? "0" : "") + (timeInMin + rest) + ":" + (timeInSec < 10 ? "0" : "") + timeInSec;
    
    return result;
}
console.log(solve(4000, 0.60, 5));