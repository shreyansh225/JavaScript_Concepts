// Below is the example of Anonymous function
// Anonymous function is a function that is not stored in a program file, but is associated with a variable whose data type is function_handle.
// The function handle can be used to call the function.

// Anonymous function
const greet = function () {
    console.log("Normal anonymous function");
};
    
greet();

// Anonymous function with arguments
const hello = function( str ) {
    console.log("Welcome to ", str);
};
    
hello(" Javascript Concepts");

// The below function is called as Self-Executing Anonymous Functions or IIFE (Immediately Invoked Function Expression)
(function (){
    console.log("Self-Executing Anonymous Functions");
}) ();


// Passing an anonymous function as a callback function to the setTimeout() method
setTimeout(function () {
    console.log(" Call back example");
}, 2000);


// As anonymous function dont have their own identity. this will result in Syntax error
// function () {

// }
