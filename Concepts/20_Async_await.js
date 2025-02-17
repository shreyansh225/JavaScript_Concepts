// what is async ?
// what is await ?
// Both are used to handle promises


// Async -----------------------------------------------------------------------------------------------------
// always returns a promise cause even if u return a value then this will wrap the value inside a promise and then return that promise
async function getData() {
    // return new Promise(function(resolve, reject){
    // })
    return "Hello World" ;
}
const dataPromise = getData();
dataPromise.then(res => console.log(res))
console.log("dataPromise = " , dataPromise)

// ----------------------------------------
const pro = new Promise((resolve, reject) => {
    resolve("pro Promise Resolved Value !! ");
})

async function getPro(){
    return pro;
}
const dataPro = getPro();
dataPro.then(res => console.log(res))
console.log("dataPro = " , dataPro)


// Await ---------------------------------------------------------------------------------------
// Await will only work inside an async function 
const p1 = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("p Promise Resolved Value !! ");
    }, 10000);   
})

const p2 = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("p Promise Resolved Value !! ");
    }, 5000);   
})

async function handlePromise(){
    console.log("Hello There")

    const val = await p1;
    // console.log("Since we used async and await the promise is resolved first eith the setTimeout then the execution moves forward")
    console.log("Hello 1")
    console.log(val)

    const val2 = await p2;
    // console.log("All the values will be printed all together since the promise was already resolved")
    console.log("Hello 2")
    console.log(val2)
}
handlePromise();

// function getD(){
//     // JS Engine will not wait for the promise to be resolved
//     p.then(res => console.log(res));
//     console.log(" Will Run Before the promise is resolved coz of the setTimeout")
// }
// getD();

API_URL = "https://invaids/shreyansh225"

async function handlePromiseNew(){
    // fetch function is a promise that gives u a response body as a readable stream when it is resolved

    const data = await fetch(API_URL);
    const jsonVal = await data.json();
    console.log("jsonVal = ", jsonVal)

    // same as the fecth function working above
    // fetch().then(res => res.json()).then(res => console.log(res));

}
// either use Try catch blocks inside the function or use the below approach
handlePromiseNew().catch( err => console.log(err))


