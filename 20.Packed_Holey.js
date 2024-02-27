// node --inspect --allow-natives-syntax  (run code in terminal)
let arr = []
// %DebugPrint(arr)    // use this in terminal to check its debugging properties

/*
Array elements kind : PACKED_SMI_ELEMENTS / HOLEY_SMI_ELEMENTS

Types of arrays: continuous (PACKED) and HOLEY

Arrays are optimised by compilers/interpreters
They are optimised on the basis of type of elements in the array

Types of optimisation in JS (Best to worst):
    SMI (Small integer)
    Double (float, NaN, Infinity)
    Packed elements (strings, functions)

Optimisation order: SMI > DOUBLE > PACKED --> if holes --> Holey_SMI > Holey_Double > Holey_Packed
Once degraded, it cannot be optimised again
*/

const packed = [1, 2, 3, 4]
// PACKED_SMI_ELEMENTS : : Best type of array but only integers allowed

packed.push(5.0)        // pushing a float value
// PACKED_DOUBLE_ELEMENTS : Now contains double type of elements

packed.push("6")        // pushing a string
// PACKED_ELEMENTS : Now contains multiple data types

packed[10] = 10
// HOLEY_ELEMENTS : Now contains empty index spaces (gaps) as well along with multiple data types

// array packed is now a HOLEY_PACKED type of array
// Even if adding or removing elements to make it only integers won't convert it into SMI

console.log(packed);
console.log(packed.length);
console.log(packed[9]);     //Checks for index 9

/*
Types of checking in array:
bound check: if index is out of array lenght
hasOwnProperty(packed, 9): if specified array has any property named 9
hasOwnProperty(packed.prototype, 9): if specified array has any custom made property named 9
hasOwnProperty(Object, 9): if Object has any property named 9 (prototypal nature)

hasOwnProperty checks are most expensive types of check. Therfore holes are very expensive in JS
*/

let arrayOne = new Array(2)     // HOLEY_SMI_ELEMENTS (two holes)
arrayOne[0] = 1.1               // HOLEY_DOUBLE_ELEMENTS
arrayOne[1] = "ONE"             // HOLEY_ELEMENTS

let arrayTwo = []               // PACKED_SMI_ELEMENTS (two holes)
arrayTwo[0] = 1.1               // PACKED_DOUBLE_ELEMENTS
arrayTwo[1] = "ONE"             // PACKED_ELEMENTS

// preferred to use browser defined loops like for, for-of, for-in, because they are more optimised than custon ones