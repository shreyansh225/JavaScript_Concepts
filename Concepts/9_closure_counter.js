
function Counter() {
    var count = 0;

    this.incrementCounter = function() {
        count++;
        console.log(count);
    }

    this.decrementCounter = function() {
        count--;
        console.log(count);
    }

}

function counter() {
    var count = 0;

    return function incrementCount() {
        count++;
        console.log(count);
    }
}


// The above way is not optimal for creating multiple instances of the same function

var counter3 = new Counter(); // returns a function
counter3.incrementCounter(); // 1
counter3.incrementCounter(); // 2
counter3.incrementCounter(); // 3
counter3.decrementCounter(); // 2
counter3.decrementCounter(); // 1
counter3.decrementCounter(); // 0

console.log("------------------------")

// This will be a new instance of count and not affect the earlier function as they are in different scope

var counter1 = counter(); // returns a function
counter1(); // 1
counter1(); // 2
counter1(); // 3

console.log("------------------------")

var counter2 = counter(); // returns a function
counter2(); // 1
counter2(); // 2
counter2(); // 3



