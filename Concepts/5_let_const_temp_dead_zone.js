// Reference error

console.log(a); // ReferenceError: Cannot access 'a' before initialization

let a = 10;


// SyntaxError: Cannot access 'a' before initialization

let b = 100;
let b = 19000;  // the syntax error will be thrown first even before the reference error


// TypeError: Assignment to constant variable.

const c = 20;
c = 30;
console.log(b)