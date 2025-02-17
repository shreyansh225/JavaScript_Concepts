// SOLID Principles in JavaScript & Node.js
//  S - Single Responsibility 
//  O - Open / Close 
//  L - Liskov Substitution 
//  I - Interface Segmented 
//  D - Dependency Inversion


// SOLID principles help in writing ----
// Avoid Duplicate code
// scalable
// maintainable
// reduce complexity
// testable JavaScript/Node.js applications. Here’s how they apply in this ecosystem:

// 1. Single Responsibility Principle (SRP)
// Definition: A class/module should have only one reason to change. It should do only one thing.

// Example in Node.js (Bad Practice)
console.log(" 1. Single Responsibility Principle (SRP) -------------------------------------")
class UserService {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(" users = ", this.users)
  }

  getUser(id) {
    console.log(" user ID = ", this.users.find(user => user.id === id))
    return this.users.find(user => user.id === id);
  }

  sendEmail(user) {
    console.log(`Sending email to ${user.email}`);
  }
}

let userOperation = new UserService()
let sampleUser = {id: "23244sf34252" , name: "Shreyansh", email: "Shreyansh@gmail.com"}
userOperation.addUser(sampleUser)
userOperation.getUser("23244sf34252")
userOperation.sendEmail(sampleUser)

// 👉 Problem: The UserService class handles both user management and email sending. If email logic changes, we must modify this class.

// Refactored (Good Practice)
class UserRepository {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log(" users = ", this.users)
  }

  getUser(id) {
    console.log(" user ID = ", this.users.find(user => user.id === id))
    return this.users.find(user => user.id === id);
  }
}

class EmailService {
  sendEmail(user) {
    console.log(`Refactored (Good Practice) Sending email to ${user.email}`);
  }
}

let userOp = new UserRepository()
// userOp.addUser(sampleUser)
userOp.getUser("23244sf34252")

let emailOp = new EmailService()
emailOp.sendEmail(sampleUser)

// ✅ Solution: Now, UserRepository handles only user data, and EmailService handles emails.
// ===========================================================================================================================

// 2. Open/Closed Principle (OCP)
// Definition: A module/class should be open for extension but closed for modification.
console.log(" 2. Open/Closed Principle (OCP) --------------------------------------------------")

// Example in JavaScript (Bad Practice)

class PaymentProcessor {
  process(paymentType, amount) {
    if (paymentType === "credit") {
      console.log(`Processing credit card payment of ${amount}`);
    } else if (paymentType === "paypal") {
      console.log(`Processing PayPal payment of ${amount}`);
    }
  }
}

let payPro = new PaymentProcessor()
payPro.process("credit", 300)
// 👉 Problem: If we add a new payment type, we must modify PaymentProcessor.

// Refactored (Good Practice using Polymorphism)

class PaymentProcessor2 {
//   process(payment, amount) {   // Then do paymentProcessor.process(new CreditCardPayment2(), 4578);
//     payment.pay(amount);
//   }
  process(payment) {
    payment.pay();
  }
}

class CreditCardPayment2 {
    constructor(amount){
        this.amount = amount
    }
  pay() { // (amount)
    // this.amount = amount
    console.log("Processing credit card payment of = $", this.amount);
  }
}

class PayPalPayment2 {
    constructor(amount){
        this.amount = amount
    }
  pay() { // (amount)
    // this.amount = amount
    console.log("Processing PayPal payment of = $", this.amount);
  }
}

// Usage
const paymentProcessor = new PaymentProcessor2();
paymentProcessor.process(new CreditCardPayment2(4578));
paymentProcessor.process(new PayPalPayment2(5020));
// ✅ Solution: Now, we can add new payment methods without modifying PaymentProcessor.

// =================================================================================================================================

// 3. Liskov Substitution Principle (LSP)
// Definition: Subclasses should be replaceable for their base classes without affecting correctness.
console.log(" 3. Liskov Substitution Principle (LSP) --------------------------------------------------")

// Example in JavaScript (Bad Practice)

class Bird {
  fly() {
    console.log("Flying...");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
}

let animalAct = new Bird()
let penguinAct = new Penguin()
animalAct.fly()
// penguinAct.fly()  // will throw error as penguins cant fly technically
// 👉 Problem: Penguin breaks LSP because it can't actually fly.

// Refactored (Good Practice using Interfaces)

class Bird2 {
  move() {
    console.log("Moving...");
  }
}

class FlyingBird2 extends Bird2 {
  fly() {
    console.log("Flying...");
  }
}

class Penguin2 extends Bird2 {
  swim() {
    console.log("Swimming...");
  }
}

let aniAct = new Bird2()
let flyAct = new FlyingBird2()
let pengAct = new Penguin2()
aniAct.move()
flyAct.fly()
pengAct.swim()

// ✅ Solution: Now, all birds can move, but only FlyingBird has fly().

// =======================================================================================================================
 
// 4. Interface Segregation Principle (ISP)
// Definition: A class/module should not be forced to implement unnecessary methods it doesn't use.
console.log(" 4. Interface Segregation Principle (ISP) --------------------------------------------------")

// Example in JavaScript (Bad Practice)

class Worker2 {
  work() {
    console.log("Working...");
  }

  eat() {
    console.log("Eating...");
  }
}

class Robot extends Worker {
  eat() {
    throw new Error("Robots don't eat!");
  }
}
// 👉 Problem: Robots shouldn't have an eat() method.

// Refactored (Good Practice using Segregation)

class Workable {
  work(info, post) {
    console.log(info,"Working in ",post);
  }
}

class Eatable {
  eat(info, food) {
    console.log(info,"Eating...", food);
  }
}

class Human extends Workable {
  constructor() {
    super();
    this.eatable = new Eatable();
  }
}

class Robot2 extends Workable {}

// Usage
const human = new Human();
human.work("humans are ", "Management");
human.eatable.eat("humans are ", " salad");

const robot = new Robot2();
robot.work("robots are ", "Manual Labor");


// class Workable {
//     work() {
//       console.log("Working...");
//     }
//   }
  
//   class Eatable {
//     eat() {
//       console.log("Eating...");
//     }
//   }
  
//   class Human {
//     constructor() {
//       this.workable = new Workable(); // ✅ Composition: Human "has a" Workable
//       this.eatable = new Eatable();   // ✅ Composition: Human "has a" Eatable
//     }
  
//     work() {
//       this.workable.work();
//     }
  
//     eat() {
//       this.eatable.eat();
//     }
//   }
  
//   class Robot2 extends Workable {} // ✅ Robots only work, no need for eating
  
//   // ✅ Usage
//   const human = new Human();
//   human.work(); // Output: Working...
//   human.eat();  // Output: Eating...
  
//   const robot = new Robot2();
//   robot.work(); // Output: Working...

  
// ✅ Solution: Now, only humans have eat(), while both can work().

// ==========================================================================================================================

// 5. Dependency Inversion Principle (DIP)
// Definition: High-level modules should not depend on low-level modules. Both should depend on abstractions.
console.log(" 5. Dependency Inversion Principle (DIP) --------------------------------------------------")

// Example in JavaScript (Bad Practice)

class MySQLDatabase {
  connect() {
    console.log("Connected to MySQL");
  }
}

class UserService1 {
  constructor() {
    this.database = new MySQLDatabase();
  }

  getUsers() {
    this.database.connect();
    console.log("Fetching users...");
  }
}
// 👉 Problem: UserService1 is tightly coupled with MySQLDatabase. Changing the database requires modifying UserService.

// Refactored (Good Practice using Dependency Injection)

class Database {
  connect() {
    throw new Error("Method not implemented");
  }
}

class MySQLDatabase2 extends Database {
  connect() {
    console.log("Connected to MySQL");
  }
}

class UserService2 {
  constructor(database) {
    this.database = database;
  }

  getUsers() {
    this.database.connect();
    console.log("Fetching users...");
  }
}

// Usage
const mysqlDB = new MySQLDatabase2();
const userService = new UserService2(mysqlDB);
userService.getUsers();
// ✅ Solution: UserService now depends on an abstraction (Database), making it easy to swap databases.

