// Strings

"use strict"
const name = "Bob"
let lang = new String("Javascript")         // String object (run in terminal or browser console)

console.log(`Name: ${name}, Language: ${lang}`);    // Use ` ${} ` - string interpolation
console.log("Name:"+name + " Language:"+ lang);

console.log(lang[0]);
console.log(lang.__proto__);            // Gives a list of functions associated with the data type
console.log(lang.length);
console.log(lang.toUpperCase());        // converts to capital
console.log(lang.charAt(3));
console.log(lang.indexOf("s"));         // If letter not in str, then -1
console.log(lang.substring(0,4));
console.log(lang.slice(0, -6));         // Negative indices allowed

let strSpaces= "    Hello World    "
console.log(strSpaces.trim());                      // Removes redundant spaces
console.log(strSpaces.replace("Hello", "World"))
console.log(strSpaces.includes("Hello"));           // returns true if exists

let dogs = "Husky-Lab-GermanShep-Beagle"
console.log(dogs.split("-"));               //Converts into array

// Numbers
let num = 100
let nums = new Number(200)
console.log(nums);
console.log(typeof nums.toString);
console.log(num.toFixed(2));            //After decimal numbers
console.log(nums.toPrecision(3));       //Similar but works before decimal as well
console.log(nums.toPrecision(2));

let sal = 15000000
console.log(sal.toLocaleString());              // Adds commas
console.log(sal.toLocaleString('en-US'));       //"en-IN" for Indian

// Math functions
console.log(Math);
console.log(Math.round(4.5));       //Other functions: floor, csil, max, min, etc

console.log(Math.random());         //Between 0-1
console.log(Math.round(Math.random() * 10 + 1));    //To get rounded off number in decimal and not 0

let min = 4
let max = 6
console.log(Math.round(Math.random() *(max - min) + min));      //To get random number in range 
