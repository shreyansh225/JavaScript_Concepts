var x = 1 // Global scoped variable
a();
b();
console.log("x = ",x)


function a() {
    console.log("a1 = ",x)
    var x = 10    // Local scoped variable
    console.log("a2 = ",x)
}


function b() {
    console.log("b1 = ",x)
    var x = 100 // Local scoped variable
    console.log("b2 = ",x)
}