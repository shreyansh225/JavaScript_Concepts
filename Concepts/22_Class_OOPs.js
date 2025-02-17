//  Object - collection of properties and methods

// Part of OOPs ----------
// Object Literal
// Constructor function
// Prototypes
// Classes
// Instances (new, this)

// 4 pillers ----------
// Abstraction  - it hides details from the user like fetch works in backend and the user only sees the data after the fetch and not the working of it
// Encapsulation - 
// Inheritance -
// Polymorphism -

const user = {
    username: "Shreyansh",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        console.log(" Got user Details ",`Username: ${this.username}`)
    }
}

console.log(user.username);
console.log(user.getUserDetails());

function User(username,loginCount, isLoggedIn){
    this.username = username // this.username is the variable and the username is the value 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting =function(){
        console.log(" Welcome ",`Username: ${this.username}`)
    }

    return this;
}
// Abstraction - User wont know how the getUserDetails method is 
const userOne = new User("Ritik ", 12, true);
const userTwo = new User("Shovik ", 18, false);
console.log(userOne.constructor)
console.log(userTwo)

// --------------------------------------------------------------------------------------------------------------------

class RailwayForm {
    constructor(givenName, trainNo, only,exist, mode){   // The constructor() method is called automatically by new ( whenever a new object is created ) so we can initialize objects there
        console.log("Constructor Called  ..", givenName," ", trainNo )
        this.name = givenName
        this.trainNo = trainNo
        this.only = only
        this.exist = exist
        this.mode = mode
    }
    totalTrain(trainCount){
        this.trainCount = trainCount
        console.log(` Total number of trains are ${this.trainCount}`)
    }
    preview(){
        alert(this.name + " : your Form for train no. = " + this.trainNo)
    }
    submit(){
        alert(this.name + " : Form Submitted for train no. = " + this.trainNo)
    }
    cancel(){
        alert(this.name + " : The Form is Cancelled for train no. = " + this.trainNo)
        this.trainNo = 0
    }
    fill(givenName, trainNo){
        this.name = givenName
        this.trainNo = trainNo
    }
    onlineTicket(){
        alert(`${this.only} ONLINE booking of ticket is ${this.exist} available for ${this.mode}`)
    }
}

class MetroForm extends RailwayForm{
    constructor(givenName, trainNo, only, exist, mode,trackname,trainCount ) {
        super(givenName, trainNo, only, exist, mode, trainCount); // Call parent constructor
        this.trackname = trackname; // Store trackname properly

    }
    track(){
        console.log(`Hi ${this.name} the ${this.trackname} track is Operational`)
    }
    totalTrain(trainCount){
        super.totalTrain(56)
        this.trainCount = trainCount;
        // super.totalTrain(56)  // will overwite the value 14 in the next line and the trainCount will become 56
        console.log("Total Train granted for metro is = ", this.trainCount )
    }

}

// Create Object and fill shreyanshForm for Shreyansh
let shreyanshForm = new RailwayForm("Shreyansh", 13234)
let shreyanshMetro = new MetroForm("Shreyansh", 13234, "Only", "", "Metro Mode", "Blue")

// // Fill the form with shreyansh
// shreyanshForm.fill("Shreyansh", 13234)

// Create Object and fill ritikForm1, ritikForm2 for Shreyansh
let ritikForm1 = new RailwayForm("Ritik", 43415)
let ritikForm2 = new RailwayForm("Ritik", 23416)

// // Fill the form with shreyansh
// ritikForm1.fill("Ritik", 43415)
// ritikForm2.fill("Ritik", 23416)

shreyanshForm.submit()
ritikForm1.submit()
ritikForm2.submit()
ritikForm1.cancel()
ritikForm1.preview()

shreyanshMetro.onlineTicket()
shreyanshMetro.track()
shreyanshMetro.totalTrain(14)

