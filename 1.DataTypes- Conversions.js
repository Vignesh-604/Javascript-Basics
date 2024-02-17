/*
Primitive Data Types (call by value) - Stack type memory
    undefined (not assigned), null (empty), boolean, string, number, BigInt and symbols (for uniqueness)

Non-Primitive data types (call by reference) - Heap memory
    Arrays, Objects, Functions    
*/

// "use strict" // Treats all JS code as newer version of JS code (good practice)

// Variables
var var1 = "This is variable"            // Global variable
var1 = "Declare once use everywhere"
let var2 = "Within scope"               // Most preferred way of declaring variables
const var3 = "Constant variable"

var4 = "Also a variable"            // Doesn't work in newer version of JS ("use strict")
let var5                            // undefined variable (not null)

console.log(var1)
console.table([var1, var2, var3, var4, var5])     // Gives out the output in tablular form

console.log(typeof null);                   // object type
console.log(typeof undefined);              // undefined type

let var6 = 54654432468665454n
console.log(typeof var6);

let var7 = "Stack memory"
let var8 = var7                             // Creates a shallow copy
var8 = "New string"
console.log(var7);
console.log(var8);

// Conversion Operations
 
let num = 55
let numStr = String(num)
console.log("\n" + typeof numStr);

let score = "33"
let scoreNum = Number(score)
console.log(typeof scoreNum);

let points = "33abc"
let pointsNum = Number(points)              // Even non numbers will get converted
console.log(typeof pointsNum);
console.log(pointsNum)                      // Will give NaN (Not a Number)

/*
"33" => 33
"33abc" => NaN     "String" => NaN
true => 1   false => 0
null => 0   undefined +> NaN
*/

let flag = 1
let bool_flag = Boolean(flag)
console.log(bool_flag);

// "" => false      "anything" => true      any Number other than 0 => true

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(-true);         //Converts into number then does operation
console.log(+"");

// Postfix increment
let num1 = 5
let num2 = num1++           //Contains the original number but increments the variable with original number
console.log(num1);              // Performs the incrementation operation after assigning the value to var
console.log(num2);

// Prefix increment
let num3 = 5
let num4 = ++num3           // Contains the incremented value and increments the variable with original number
console.log(num3);              // Performs the incrementation operation before assigning the value to var
console.log(num4)

// Comparision operators
console.log("2" > 1);
console.log("2" === 2);         // Strict check - checks value and data type

console.log(null > 0);          // Equality check works different compared to comparision ops
console.log(null == 0);         // Null is not converted into 0 here
console.log(null >= 0);         // Null is converted into 0

console.log(undefined == 0);    // Will always give false