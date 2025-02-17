
var x = 7

function getName() {
    console.log(" Kaise ho bhai ")
    var a = 123
    var b = "bhai"
    let c = 134135
    
    console.log("a = ",a)
    console.log("b = ",b)
}

// getName2();

var getName2 = function() {
    console.log(" Areee Kaise ho bhai !! Hello")
}

getName();
console.log("x = ",x)

let z = 25

console.log("======================")

console.log("z = ",z)

getHoist();
console.log("y = ",y)
var y = 9

function getHoist() {
    console.log(" Hoisting Example ")
}


