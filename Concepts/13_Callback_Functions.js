// Javascript is a synchronous single threaded lang

// Callbacks are functions that are passed as arguments to other functions

// Example 2 : setTimeout
setTimeout(function(){
    console.log("timer");
}, 5000);

// Example 1
// function y is called back later in the code when x is called
function x(param){
    console.log("x");
    param()
}
x(function y(){
    console.log("y");
});


// Deep about event listeners

// Closures demo with event listners

// Scope Demo with Event Listners

// Garbage collection & remove event listeners

// Event Bubbling & Capturing

function attachEventListner(){
    let count = 0
    document.getElementById("clickMe")
    .addEventListener("click", function xyz(){
        console.log("Button Clicked", ++count);
    });
}

attachEventListner();

// function removeEventListner(){
//     document.getElementById("removeEvent")
//     .removeEventListener("click", xyz);
// }

// removeEventListner();




