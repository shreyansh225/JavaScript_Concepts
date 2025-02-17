// in console check for window and this keyword

// this === window
// true


var a = 10;

function b() {
    var x = 10;
}

console.log(a);
console.log(window.a); // 10
console.log(window.x); // undefined
console.log(this.a); // 10
console.log(this.x); // undefined
console.log(this); // window object
