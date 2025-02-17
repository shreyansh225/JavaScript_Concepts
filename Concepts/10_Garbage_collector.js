
function a(){
    var x = 10, z = 20;  // z will be smartly garbage collected as it is not being used anywhere even though it is in the lexical environment (closure) of b

    return function b(){
        console.log(x)
    }
}

var y = a();

y(); // 10