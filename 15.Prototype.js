// ** Objects

//Everything in javascript is an object --> Prototypal behaviour
// Strings/Number/Array/Boolean,etc --> Object --> null
// Datatypes have their own properties + properties of Object        Inheritence
function multiplyBy5(num) {
    return num*5
}
multiplyBy5.hello = 2                       // accessing function as an object

console.log(multiplyBy5(5));
console.log(multiplyBy5.hello);             // functions behave as a function and as an object
console.log(multiplyBy5.prototype);         // Properties included in the current context (this)

function user(name, credits) {
    this.name = name,
    this.credits = credits
}

user.prototype.increment = function() {return this.credits + 1}          // creating customfunction
user.prototype.print = function() {console.log(this.credits);}    // Since func also an object, can inject custom properties

const tim = new user("Tim", 100)                // this keyword used to tell function which instance to use
const bob = new user("Bob", 200)                // Creating an instance of that function

tim.print()                                     // No need to use prototype
console.log(bob.increment())

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/


// ** Prototype **
let str = "   Hello  "
console.log(str.trim().length);                                 // make it into a custom function

String.prototype.trueLength = function () {                     // Every string will have this function now
    return this.trim().length                                   // this refers to the String
}
console.log("True Length of str: " + str.trueLength());

let login = {
    user:"Admin",
    loggedIn : true,
    message: function(){return `Hello ${this.user}, you have access to everything!`}
}
console.log(login.message());

Object.prototype.greeting = function () {                       // Directly injecting custom function into Object class
    return "Have a great day ahead!!"                           // Everything will now have access to this function
}                                                               // Including strings/ arrays, functions,etc

console.log(login.greeting());
console.log(str.greeting());                                    // Even string has this functionality

let myArray = ["Apple", "Banana", "Cherry"]

Array.prototype.notify = function () {                          // Giving array custom function
    return "This may be a fruit basket"
}
console.log(myArray.notify())                               // All arrays will have this function now

// console.log(str.notify());                              // Only arrays will have it and not other datatypes


// ** Inheritence **
let professor = {id: 101, name: "Tim"}

let courseDetails = {course : "Comp Science", degree : "UG"}

let availablity = {available : true, __proto__ : courseDetails}         // __proto__ inherits elements of other objects

let date = {joinDate : "12-3-2020"}

professor.__proto__ = availablity                                   // professor has access to all properties of other objects

console.log(professor.course);                                      // professor inherits availablity
console.log(professor.available);                                   // availablity inherits courseDetails
// console.log(courseDetail.availablity);                              // one way inheritence -> courseDetails has nothing to inherit from

// Modern syntax
Object.setPrototypeOf(professor, date)                              // Professor inherits properties of date
console.log(`${professor.name} joined on ${professor.joinDate}.`);

console.log(professor.name.trueLength());               //Using custom made string function
