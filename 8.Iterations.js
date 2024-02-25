// *** while ***
var i=0
while (i<3) {
    console.log("Statement "+i)
    i++
}

// *** do/ while ***
var i=0
do {
    console.log("Phrase "+i);
    i++
} while (false)

// For loop
for (let i=0; i<5; i++)
{
    if (i === 2) continue;
    else if (i === 4) break;
    console.log(i)
}


// FOR / IN (loop through properties of any object)
var names = {"P1":"ABC", "P2":"MNO", "P3":"XYZ"}
for(n in names) {console.log(n+" - "+names[n])}

let arr = ["JS", "C++", "Java"]
for (let n in arr) console.log(arr[n]);         //iterating through an array


// FOR / OF (loop through the value of iterable objects)
var fruits= ["apple","banana","mango"]
for (let f of fruits) {console.log(f)}

let map = new Map()
map.set("A", "Apple")
map.set("B", "Banana")
map.set("C", "Carrot")
for (const [key, value] of map) console.log(key+"  "+value);

// High Order functions (HOF)

// forEach function : using a callback func (no name) to iterate though an array
const langs = ["JS", "C++", "Java", "Python"]

langs.forEach( function(element) {console.log(element);})   

langs.forEach(element => {console.log(element);});
// "element" is the array element passed as a parameter 

function print(item) {console.log(item);}
langs.forEach(print)

langs.forEach(function (item, index, array) {console.log(item,index,array);})   //Custom function callback

let langs2 = [{id:1, "name":"JS"}, {id:2, "name":"C"},{id:3, "name":"Py"}]      //JSON array
langs2.forEach( item => { console.log(`Id:${item.id}, Lang:${item.name}`);})

let elements = langs.forEach(item => {return item})
console.log(elements);                      // doesn't return any values or can be stored in a variable


// *** filter() ***
let num = [1,2,3,4,5,6]
const newnum = num.filter(numbers => numbers % 2 === 0)     // returns values that satisfies certain condition
console.log(newnum);

let dynamicLangs = langs2.filter(lang => {
    return lang.name === "Py" || lang.name === "JS"
})
console.log(dynamicLangs);
dynamicLangs.forEach(keys => console.log(keys.name))    //Getting the names of langs

// *** map() ***
let doubleNums = num.map(number => number *2)   //returns val after performing operation
console.log(doubleNums);

let numbers = [10,20,30,40,50]
let opMap =  numbers.map(i => i / 2).map(i => i++).filter(i => i%2===0)
console.log(opMap);         //the resultant array of function will be input to next array


// *** reduce() ***

// reduce(function (param1,param2){}, default) -->  param1: inital value (0 default), param2: iteration value
const points = [1,2,3,4,5]
let score = points.reduce((total, nextPoint)=> total+nextPoint, 20) // 20 is the initial value
console.log(score);

let course = [{name:"JS",cost:200}, {name:"Python",cost:170}, {cost:"C++",cost:100}]
let totalCost = course.reduce(function(total,price) {return total+price.cost}, 0)
console.log(totalCost);

// param 1: holds a variable (default=0) that can be manipulated inside the function
// param 2: holds the iterated value

// Example 2
let numbers2 = [5, 20, 100, 60, 1];
const maxValue = numbers2.reduce((max, curr) => {
    if(curr > max) max = curr;
    return max;
});
console.log(maxValue); // 100

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { e: 5, f: 6 };

function merge(final, current) {        // final holds the values of iterated values, current is current value
    return {...final, ...current}       // spread operator returns single object = final + current values
}
const mergedObj = [obj1, obj2, obj3].reduce(merge, {});  // default is an empty obj --> final = {}
console.log(mergedObj);


// Example 3
const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]

const products = shoppingCart.reduce((productGroup, product) => {
    
    const name = product.name;
    if(productGroup[name] == null) {        // checks if theres a group in the final object with that name (!productGroup[name])
        productGroup[name] = [];            // null to check absence of that name group - creates an empty array of that name
    }
    productGroup[name].push(product);       // pushes object element into array of same name

    return productGroup;
},{});

console.log(products);

// Note: When reduce runs without an initial value, the first element of the array is used as the initial value of the accumulator
// (productGroup in your code), and the iteration starts from the second element.
