// Difference between function statement and function expression is a gets houisted as during the memory allocation phase a is created and
//  this function is assigned to a. So, a can be called before the function is declared.

a();
b();  // Will give TypeError: b is not a function and is treated like any other variable and is allocated undefined during memory allocation phase

// Function Statement aka Function Declaration --------------------------------------------------
function a(){
    console.log("a called");
}
// a();  // a called

// Function Expression ------------------------------------------------
var b = function(){             // function acts as a value
    console.log("b called");
}
// b();  // b called


// Named Function Expression ------------------------------------------------
var n = function xyz(){             // function acts as a value
    console.log("n called");
}

n();  // n called
xyz();  // ReferenceError: xyz is not defined


// First Class Functions ------------------------------------------------
// The ability to use functions as values and can be passed as an arrgument and returned from other functions is called first class functions
// Functions are First class citizens

var d = function (param1){
    return function xyz(){
        console.log("n called", param1);
    };
}

console.log(d(10));  // [Function: xyz]

var k = function (param){
    return function (){
        console.log("n called", param);
    };
}

console.log(k(function (){
    console.log("Hello")}
));  


// Arrow Functions ------------------------------------------------
// Part of ES6
