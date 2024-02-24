function add(num1, num2) {console.log(num1 + num2);}

add(1, "2")         //Since second arg is str, it'll concat
add(3, "b")
add(3, null)

// Return statements
function add2(num1, num2) {
    return num1 + num2;
    console.log("Will not print");
}
console.log(`Result: ${add2("5",3)}`)
console.log("Result if no args passed: "+ add2());

//No args and default args
function login(username, password="123") {              // Default arguments
    if (!username) {                                    //Checks if username === undefined
        console.log("Please enter a username");
        return                                          //Returns undefined, ends function
    }
    return `Hello ${username}, password: ${password}`
}
console.log(login());

//Multiple arguments or undefined number of args
function itemCart(cost1, cost2, ...costs) {return costs}   //Rest operator - bundles multiple args into an array

console.log(itemCart(100,200,300,400,500));     //Args without parameters will be included in rest parameter

// Objects as parameters (JSON for example)
let obj = {id:"1", language:"JS"}

function objFunc(anyObject) {
    console.log(`ID number: ${anyObject.id}  Language: ${anyObject.language}`); //If key doesn't exist => undefined
}
objFunc(obj)

// Arrays into func
function arrFunc(anyArray) {return anyArray[2]}
console.log(arrFunc(["a", "b", "c", "d"]));

// "this" keyword - refers current context
let thisObjFunc = {username:"Bob", func : function(){console.log("Hello " + this.username);}}

thisObjFunc.func()                              //Current context (object)
thisObjFunc.username = "Pop"
thisObjFunc.func()

console.log(this);      // {} for node but for browsers, current context is the Window object

// this  in functions
const thisFunc = function() {console.log(this);}
thisFunc()                                              // Returns functional execution context (properties of functions)

const thisArrow = () => {console.log(this);}
thisArrow()                                             // Returns golbal execution context ({} for Node)

// Arrow function
addThree = (num1, num2, num3) => {return num1, num2, num3}      // Explicit return (return and {} required)
console.log(addThree(2, 4, 6));

let addTwo = (num1, num2) => (num1 + num2)       //Implicit return (single line statements)
console.log(addTwo(3,5))

let objReturn = () => ({username : "User"})     //To return an object
console.log(objReturn());

//Immediately Invoked Function Expressions (IIFE)
// To create a seperate untampered by the pollution of global scope and to be excecuted immediately
// Write the function inside () and end with (); to excecute it

(function con() {console.log("Connection Sucessful!");})();     //Named IIFE

( () => {console.log("Arrow function without a name!!!");})();   //Arrow function - simple IIFE

( hello = (user) => {console.log(`Hello ${user}`)})("Bobby");    //IIFE with paramsz