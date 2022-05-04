let output = [];

let fizzBuzz = function(desiredLength) {
    for (let i = 1; i <= desiredLength; i++) {
        if (i % 15 === 0) {
            output.push("fizzbuzz");
        } else if (i % 3 === 0) {
            output.push("fizz");
        } else if (i % 5 === 0) {
            output.push("buzz");
        } else {
            output.push(i);
        }
    }
}

function onTheWall(numberOfBottles, liquid) {
    let bottleWord = "bottles"
    while (numberOfBottles > 1) {
        console.log(`${numberOfBottles} ${bottleWord} of ${liquid} on the wall, ${numberOfBottles} ${bottleWord} of ${liquid}!`);
        numberOfBottles--;
        if (numberOfBottles > 1){
        console.log(`Take one down, pass it around, ${numberOfBottles} ${bottleWord} of ${liquid} on the wall.`);
        } else {
            bottleWord = "bottle"
            console.log(`Take one down, pass it around, ${numberOfBottles} ${bottleWord} of ${liquid} on the wall.`);
        }
    }
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
        console.log(`${numberOfBottles} ${bottleWord} of ${liquid} on the wall, ${numberOfBottles} ${bottleWord} of ${liquid}!`);
        console.log(`Take it down, pass it around, no more bottles of ${liquid} on the wall.`);
    }
}

function fibonacciGenerator(n) {
    let output;
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        for (let i = 2; i < n; i++) {
            output.push(output[output.length-2] + output[output.length-1]);
        }
    }
    return output;
}

let result = fibonacciGenerator(9);
console.log(result);