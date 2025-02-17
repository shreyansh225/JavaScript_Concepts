"use strict";

// this in Global space
console.log(this);  // Global Object, Window( In Browser Console), Global( In Node.js)

// this inside a function
function x(){
    // this value will be UNDEFINED IN STRICT MODE and window if non strict mode 
    console.log("function eg = ",this); 
}

// this inside non strict mode - (this substitution)
// If the value of this keyword is undefined or null 
// this keyword will be replaced with globalObject
// only in non strict mode

// this value depends on how this is called ( window )
x();
window.x()

// this inside arrow function
// arrow functions dont have their own this but they take their lexical context
const obj = {
    name: 'Node',
    regularFunc: function () {
        console.log("regular eg = ",this);
        console.log("regular eg = ",this.name);
    },
    arrowFunc: () => {
        console.log("arrow eg = ",this); // value of this will not be the object but its enclosing lexical context
        // arrowFunc does not have its own this. It inherits this from the surrounding scope, which is likely the global object (window in browsers or global in Node.js). Since window.name is not 'Node', it prints undefined.
        console.log("arrow eg = ",this.name); 
    }
  };
  
obj.regularFunc(); // 'Node'
obj.arrowFunc();   // undefined

// this inside nested arrow function

const obj2 ={
    a: 2000,
    y: function() { 
        // enclosing lexical context
        const x = () => {
            console.log("nested arrow eg = ",this); 
        };
        x();
    },
}
obj2.y();

// this inside DOM elements => reference to the html

// this inside a objects method

const student ={
    firstName: "Shreyansh",
    lastName: "Gupta",
    printName: function(){  // a FUNCTION which is a part of an object is called METHOD
        console.log("objects eg = ",this); // the value of the this keyword is the object it belongs to
        console.log("objects eg = ",this.firstName);
    } // x is the method of the object obj
}

let fullName = function(homeTown, state){
    console.log(this.firstName + " " + this.lastName + " from " + homeTown + ", " + state);
}

student.printName();

const student2 ={
    firstName: "Chavi",
    lastName: "Gupta",
}

// Call, Apply, Bind methods ( sharing methods )

// Call - Function Borrowing
student.printName.call(student2)  // the first argument is the reference to the this keyword
fullName.call(student, "Raniganj", "West Bengal") // arguments are passed indivisually coma separated
fullName.call(student2 , "Kanpur", "Utter Pradesh")

// Apply - 
fullName.apply(student2 , ["Kanpur", "Utter Pradesh"]); // arguments are pass it as the second argument as an array list

// Bind method - returns a function that can be called later
let PrintFullName = fullName.bind(student2 , "Kanpur", "Utter Pradesh"); 
console.log(PrintFullName)
PrintFullName();
