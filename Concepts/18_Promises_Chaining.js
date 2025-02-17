// A Promise object is a placeholder for a certain period of time until we receive a value from a asynchronus operation
// A promise is a container for a future value
// A promise is an Object representing the eventual completion or faliure of an asynchronous operation

// Only Three Promise States in Promises ( Pending, Fulfilled , Rejected)
//       Setteled
//          /\
// Resolved    Reject
// Success     Faliure
// Fulfilled   Rejected

const cart = ["shoes", "pants", "kurta"];

// Below is the classic example of CallBack hell and our code begins to grow horizontally
// Pyramid of Doom
createOrder(cart, function(orderId){
    proceedToPayment(orderId, function(paymentInfo){
        showOrderSummary(paymentInfo, function() {
            console.log("Inside the final call back of Pyramid of Doom " )
            updateWalletBalance();
        });
    });
}); // orderId

// The above situation can be resolved by Promise chaining

const promise = createOrder(cart);
promise.then(function(orderId){
    console.log("Inside the 1st promise")
    return proceedToPayment(orderId)
});

// Below is the same code with diffrent writung format

const finalVal = createOrder(cart).then( function(orderId) {
        console.log("Inside the 2nd promise ",orderId)    
        return orderId;
    })
    .catch(function(error){
        console.log(error.message)
        return null // ensures safe handling in next .then
    })
    .then(function(orderId) {
        if(!orderId) throw new Error("Cannot proceed to payment due to order failure")
        return proceedToPayment(orderId)
    })
    // .then(function(paymentInfo){
    //     console.log("paymentInfo, orderId = " ,paymentInfo, orderId)
    //     return showOrderSummary(paymentInfo).then((paymentInfoObj) => ({ ...paymentInfoObj, paymentInfo }))
    // })
    .then(paymentInfo => {
        console.log("paymentInfo, orderId =", paymentInfo, orderId);  
        return showOrderSummary(paymentInfo).then(paymentInfoObj => ({...paymentInfoObj,  paymentInfo }));
    })  // Can use Arrow function for lean code and better readablity
    .catch(function(error){
        console.log("Catching Error After showOrderSummary = ", error.message)
        return null;
    })
    .then(function(paymentInfoObj){
        console.log("paymentInfoObj = ", paymentInfoObj),
        console.log(paymentInfoObj.paymentInfo, paymentInfoObj.cart, paymentInfoObj.itemCost,"No matter what happens i will be called since i am after the catch block")
        return updateWalletBalance(paymentInfoObj)
    })

console.log("finalVal = ", finalVal)


//  Producer
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        // create order
        // calls to database
        // validateCart
        // orderId

        if(!validateCart(cart)){
            const err = new Error("Cart is not Valid")
            reject(err);
        }
        else{
            orderId = "12345";
        }

        // logic for createOrder
        
        if(orderId){
            setTimeout(function(){ // setTimeout to make a simulate a delay of 5 sec
                resolve(orderId);
            } ,5000)     
        }
    });

    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        if(orderId){
            const paymentInfo = {transactionId:"tr1234r13bhbh",
                                mode:"UPI", 
                                dateTime:new Date(), 
                                totalCost: 6002 }
            resolve({paymentInfo, message:"Paymetn Successful"});
        }
        else reject("Failed at proceedToPayment")  
    });
}

function showOrderSummary(paymentInfo){
    return new Promise(function(resolve, reject){
        if(paymentInfo){
            const itemCost = [1900, 1800, 2302]
            resolve({cart,itemCost, message:"Order Summary"})
        }
        else reject("Failed at showOrderSummary")
        
    });
}

function updateWalletBalance(paymentInfoObj){
    return new Promise(function(resolve, reject){
        if(paymentInfoObj){
            // fetch function to get current balance
            resolve("updateWalletBalance after payment")
        }
        else reject("Failed at updateWalletBalance")
       
    });
}

function validateCart(cart){
    return true
}


// {data: undefined }
// -------------------------------------------------------------------

const GITHUB_API = 'https://api.github.com/users/shreyansh225'
const DogApi = 'https://dog.ceo/api/breeds/image/random'

const user = fetch(GITHUB_API);
const dog = fetch(DogApi)

console.log(user)

user.then(function(data){
    console.log(data)
})

dog.then(function(data){
    console.log(data)
})