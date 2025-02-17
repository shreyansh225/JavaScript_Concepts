// A function that takes a function as an argument or returns a function as a result is called a higher-order function.

function x(){
    console.log("x");
}

// Here Func y is a higher order function as it takes a function x as an argument
function y(x){
    x();
}


const radius = [3, 1, 2, 4];

const calcArea = function(radius){
    const output = [];

    for(let i = 0 ; i < radius.length ; i++){
        output.push(Math.PI * radius[i] * radius[i]);
    }

    return output;
}

console.log(calcArea(radius));

// Instead of writing the above code, we can use the below code

const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function(radius){
    return 2 * radius;
}

const calc = function(arr, logic){  // Similar to the Map 
    const output = [];

    for(let i = 0 ; i < arr.length ; i++){
        output.push(logic(arr[i]));
    }

    return output;
}

Array.prototype.calculate = function(logic){      // Exactly same logic to the Map Function
    const output = [];

    for(let i = 0 ; i < this.length ; i++){
        output.push(logic(this[i]));
    }

    return output;
}

console.log(radius.map(area));  

console.log(radius.calculate(area))  

console.log(calc(radius, area));
console.log(calc(radius, circumference));
console.log(calc(radius, diameter));