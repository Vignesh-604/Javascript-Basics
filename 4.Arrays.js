let arre = ["array", 1, true, null, undefined]
let arr = new Array("A", "B", "C")

arr.push("D")
arr.push("E","F")
arr.pop()
arr.unshift("0")                //Adds an element at the beginning 
arr.shift()                     //Removes an element from the beginning
console.log(arr);

console.log(arr.includes("E"));
console.log(arr.indexOf("C"));
console.log(arr.join());        //Converts into string
console.log("String array: " + arr);        //Also gets converted to string

//Slice and Splice operator
let numArray = [0,1,2,3,4,5]
console.log("\nOrignal Array: ", numArray);
console.log("Sliced array: ", numArray.slice(0,3));     //Slice gives the array of selected range of elements
                                                        // Does not affect the original array
console.log("Orignal Array after slice: ", numArray);
console.log("Spliced array: " , numArray.splice(0,3)); 
console.log("Orignal Array after splice: ", numArray);
//Splice takes a starting index and count of elements to be removed. Removes from original array

let animal = ["Dog", "Cat", "Horse"]
let animal2 = ["Frog", "Llama", "Kite"]
let animal3 = ["Jackal", "Tiger","Frog"]

let animals = animal.concat(animal2)        //Combines 2 arrays
console.log(animals);

let animals2 = [...animal, ...animal2, ...animal3]      //Spread operator - to combine many arrays
console.log(animals2);

let numbers = [0, 1, 2, 3, [4,5], 6, [7, [8,9],10], 11] //Converts all internal nested array elements into single array
console.log(numbers.flat(Infinity))

console.log(Array.isArray("Hello"));            //Checks if array
console.log(Array.from("Hello"));               // Converts into array
console.log(Array.from({name:"hello"}));        //Need to specify if array of key or value else []
let score = 100;
let score2 = 200
let score3=300
console.log(Array.of(score,score2,score3));

// Maps : Set of unique key-value pairs
let map = new Map()
map.set("A", "Apple")
map.set("B", "Banana")
map.set("C", "Carrot")
map.set("B", "Berry")
map.set("C", "Carrot")
console.log(map);
