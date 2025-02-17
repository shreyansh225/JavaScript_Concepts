var a = 190908
let b = 756565
{
    // Block
    // Compund staments
    // multiple statements in a block
    var a = 10;
    let b = 1232
    const c = 23235

    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b); 
console.log(c);  // reference error c is not defined --- since let and const are block scoped
// ---------------------------------------------------------------
let x = 3
const y = 6

if(x == 3){
    x = 21
    y= 96

    console.log("x = " , x)
    console.log("y = " , y)
}

console.log("x = " , x)
console.log("y = " , y)
