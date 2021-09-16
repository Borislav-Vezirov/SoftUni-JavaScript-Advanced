function solve(speed, area) {
    speed = Number(speed);

    let actions = {
        motorway,
        interstate,
        city,
        residential
    }

    let action = actions[area];
    action(area)

    function motorway() {
        limit(130);
    }

    function interstate() {
        limit(90);
    }

    function city() {
        limit(50);
    }

    function residential() {
        limit(20);
    }

    function limit(allowedSpeed) {
        if (speed <= allowedSpeed) {
            console.log(`Driving ${speed} km/h in a ${allowedSpeed} zone`);
        } else {
            let status = '';
            let difference = speed - allowedSpeed;
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${allowedSpeed} - ${status}`);
        }
    }
}
solve(200, 'motorway');