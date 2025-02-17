console.log("Start");

// The Event Loop Will constantly check the Call Stack, Microtask Queue and Callback Queue and will execute the functions in the following order:
// 1. Check the Call Stack
// 2. Check the Microtask Queue
// 3. Check the Callback Queue

// Before a call back function is stored in Microtask Queue and the callback Queue, it is stored in the Web API Environment

// Promises and Mutation Observer are stored in Microtask Queue
// DOM APIs, setTimeout, Event Listners are stored in Callback Queue aka Task Queue

// If the Microtask Queue has many micro tasks and since the Microtask Queue has higher priority than the Callback Queue, the Microtask Queue will be executed first
// This will lead to a delay in execution of callback functions in the Callback queue and this could lead to Starvation of the task in Callback Queue

setTimeout(function(){
    console.log("CB setTimeout");
}, 5000);     // after 5 seconds the callback function is called and the callback function is stored in Callback Queue

fetch("https://api.github.com/users")  // fetch is a promise based function and the call back function of fetch is stored in Microtask Queue which is of higher priority than Callback queue the callback function of setTimeout
.then(data => data.json())
.then(data => {
    console.log("CB Github", data);
});

console.log("End");

// Million lines of code if present here will be executed first and as soon as the call stack is empty, the event loop will check the Microtask Queue and then the Callback Queue
// Might take 10 sec to run all these and then only the call stack will be empty to run any other function present in the Microtask Queue or Callback Queue
// below program can simulate the 10 sec delay
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("While Expires");