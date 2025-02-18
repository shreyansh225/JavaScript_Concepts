const arr = [5, 1, 3, 2, 6];

const users = [
    { firstName: "Shreyansh" , lastName: "Gupta", age: 26},
    { firstName: "Elon" , lastName: "Musk", age: 62},
    { firstName: "Brad" , lastName: "Pitt", age: 56},
    { firstName: "Ritik" , lastName: "Sinha", age: 26},
    { firstName: "Tom" , lastName: "Cruise", age: 45},
    { firstName: "Jerry" , lastName: "Mac", age: 23},
    { firstName: "Tony" , lastName: "Stark", age: 48},
    { firstName: "Steve" , lastName: "Rogers", age: 39},
];


// Map method -----------------------------------------------------------

// Double - [10, 2, 6, 4, 12]
function double(x){
    return x * 2;
}
const out_doub = arr.map(double)

const output_doub = arr.map(item => item * 2)

console.log(out_doub);
console.log(output_doub)


// Binary - ["101", "1", "11", "110"]
const out_binary = arr.map((x) => {return x.toString(2)})
console.log(out_binary);

const output_binary = arr.map(item => item.toString(2))
console.log(output_binary);

// Filter method ----------------------------------------------------------------

function isOdd(x){
    return x % 2;
}
function isEven(x){
    return x % 2 === 0;
}
const odN = arr.filter(isOdd)
console.log(odN)

const oddNum = arr.filter( item => item % 2)
const evenNum = arr.filter(item => item % 2 === 0)
console.log(oddNum)
console.log(evenNum)

// Same thing is done with a reducer in the bottom of the code
const fName = users.filter(x => x.age < 30 ).map( item => item.firstName)
console.log(fName)


// Reduce method ----------------------------------------------------------

// Find Sum
function findSum(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){
        sum = sum + arr[i]
    }
    return sum;
} 
console.log(findSum(arr))

// .reduce(function, initial value)
// function( accumulator ( just like Sum in updated sum value that needs to be returned), current (just like i in iterating for loop))
const arrSum = arr.reduce( function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0)

console.log(arrSum)

// Find Max ------------
function MaxVal(arr){
    let max = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > max)
        max = arr[i]
    }
    return max;
}
console.log(MaxVal(arr))

const arrMax = arr.reduce( function( acc, curr){
    if(curr > acc)
        acc = curr
    return acc
}, 0)
console.log(arrMax)
 // ----------------------------------

const fullName = users.map( x => x.firstName+" "+x.lastName)
console.log(fullName)


const sameAge = users.reduce( function(acc, curr){
    if(acc[curr.age]){
        ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1
    }
    return acc;
}, {} )

console.log(sameAge)


const nameAge = users.reduce( function( acc, curr){
    if(curr.age < 30)
        acc.push(curr.firstName)
    return acc
},[])
console.log(nameAge)