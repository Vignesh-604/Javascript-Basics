//Objects : Object literals and singletons

//Object literals
const sym = Symbol("myKey")

const obj = {name:"bob", "lname":"tarts", age:"23", log:true, sym: "symbol1", [sym]: "realSymbol"}

obj["gender"] = "male"                              // adding elements

console.log(obj);
console.log(obj.name);
console.log(obj["lname"]);      //Better way of accessing values
console.log(obj.sym + " " + typeof obj.sym);
console.log(obj[sym] + " " + typeof obj[sym]);      // [] necessary to access the symbol

obj.days = ["Monday", "Tuesday"]
// Object.freeze(obj)                          //Can't update or unfreeze.

obj.days = ["Sunday", "Thursday"]           //Can't replace once frozen
obj.holidays = ["Friday", "Sunday"]         //Can't add
console.log("\n");

obj.func1 = function() {
    console.log("This a function");
}
obj.func2 = function() {
    console.log(`Name: ${this.name} ` + this.lname);     // "this' keyword used to refer to same object
}

console.log(obj.func1);                 //Returns only the reference of the function
console.log(obj.func1());
console.log(obj.func2());
console.log("\n");

//Singleton - made from constructors
let sing = new Object()

sing.id = 101
sing.name = {fName: "Pop", lName:"Tarts"}       //Can have multiple nested objects
sing.status = true

console.log(sing.name.fName);       //To get value of nested obj

console.log(Object.keys(sing));     //To access all keys
console.log(Object.values(sing));   //All values
console.log(Object.entries(sing));  //Gets the object and it's key-value pairs in array format 
console.log(sing.hasOwnProperty("name"));   //Checks if the key exists or not
if(Object.keys(sing).lenght === 0) console.log("Empty object");     //Lenght of array of keys
console.log("\n");

//Merging objects: Object.assign(target, source)
let obj1 = {1:"a", 2:"b"}
let obj2 = {3:"c", 4:"d"}
let obj3 = {5:"e", 6:"f"}

let obj4 = Object.assign({}, obj1, obj2, obj3)      //Here the {} is the target and rest are source
console.log(obj4);                                  //If not provided {}, all objects would append to obj1

let obj5 = {...obj1, ...obj2, ...obj3}              // Using spread operator
console.log(obj5);                                  // Opens each obj and inserts the elements into final obj

let users = [
    {id:1, name:"Apple"},
    {id:2, name:"Banana"},
    {id:3, name:"Custardapple"},
]
console.log(users[1].name);     // To access an object inside an array (Values from db)

// Destructuring
let course = {name: "JS", duration: 1, Instructor: "Bobby"}

let {Instructor : inst} = course        //  renaming keys for readability
console.log(inst);                      // Works just like normal keys but no specify obj name

/* React stuff (where destructuring is used)    props.company : company
const navbar = (props.company) => {};

const navbar = ({company})
*/

/*  JSON - Data from APIs
{
    "id": "001"
    "name": "dude"
    "language": "JS"
}
or in array of objects format
[
    {},{},{}
]
*/