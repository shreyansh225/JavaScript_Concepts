// Closure is the combination of a function bundled together with reference to its lexical environment

// Uses of closures:
// 1. Module Design Pattern
// 2. Currying
// 3. Function like once
// 4. Memoization
// 5. maintaining state in async world
// 6. setTimeouts
// 7. Iterators
// 8. Recursion

// Example 1

function x(){
    var a = 10

    function y(){
        console.log(a)
    }

    return y
}

var w = x();
console.log(w);
w();


// Example 2

function i(){
    var b = 900;
    
    function j(){
        var c = 7;

        function k(){
            console.log(c,b)
        }
        k();
    }
    j();
}
i();