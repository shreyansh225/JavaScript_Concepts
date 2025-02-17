// 1. Promise.all()
// 2. Promise.allSettled()
// 3. Promise.race()
// 4. Promise.any()

const p1 = new Promise( (resolve, reject) => {
    setTimeout(() => resolve(" P1 Success "),3000)
    // setTimeout(() => reject(" P1 Fail "),3000)
})

const p2 = new Promise( (resolve, reject) => {
    // setTimeout(() => resolve(" P2 Success "),1000)
    setTimeout(() => reject(" P2 Fail "),1000)
})

const p3 = new Promise( (resolve, reject) => {
    setTimeout(() => resolve(" P3 Success "),2000)
    // setTimeout(() => reject(" P3 Fail "),2000)
})

// 1. Promise.all() - for making parallel API Calls or handle multiple promises together
// Suppose we have 10 userIDs and make 10 API calls need to get userInfo
// It will take array of promises -- promise.all([p1, p2, p3])
// promise.all() takes the max time for the max time of a promise within it
// As soon as any one of the promise is rejected then the promise.all will throw the same error. It will not wait for the other promises

// Input - promise.all([p1, p2, p3])  // If all promises are resolved
// Output - [val1, val2, val3]

// Input - promise.all([p1, p2, p3])  // If promise p2 is rejected
// Output - Error

Promise.all([p1, p2, p3]).then( res => {
    console.log("Promise.all() = ",res)
}).catch((err) => {console.error(err)});

// ===============================================================================================================

// 2. Promise.allSettled() -  Returns an Object
// It waits for all the promises to be setteled  and the ouput will be an array of the same number of promises u passed in 

// Input - promise.allSettled([p1, p2, p3])  // If promise p2 is rejected
// Output - [val1, err2, val3]

Promise.allSettled([p1, p2, p3]).then( res => {
    console.log("Promise.allSettled() = ",res)
}).catch((err) => {console.error(err)});

// ==========================================================================================================================

// 3. Promise.race() -
// Gives the value of the first settled promise either it is and error/rejected or a resolved

// Input - promise.race([p1, p2, p3])  
//                       3s , 5s, 2s
// Output - (val3)

// Input - promise.race([p1, p2, p3])  // If promise p3 is rejected
//                       3s , 5s, 2s
// Output - (Error)

Promise.race([p1, p2, p3]).then( res => {
    console.log("Promise.race() = ",res)
}).catch((err) => {console.error(err)});

// ==================================================================================================================

// 4. Promise.any()
// Gives the value of the first settled promise ONLY IF IT IS RESOLVED

// Input - promise.race([p1, p2, p3])  // If promise p3 and p1 is rejected
//                       3s , 5s, 2s
// Output - (val2)

// Input - promise.race([p1, p2, p3])  // If promise p1,p2 and p3 all are rejected
//                       3s , 5s, 2s
// Output - [err1, err2, err3]     // Will return back the AgregateError

Promise.any([p1, p2, p3]).then( res => {
    console.log("Promise.any() = ",res)
}).catch((err) => {
    console.error(err)
    console.log(err.errors)
});



