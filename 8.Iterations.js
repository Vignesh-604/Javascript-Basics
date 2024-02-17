//while
var i=0
while (i<3)
{
    console.log("Statement "+i);
    i++
}

// do/while
var i=0
do
{
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

// for/in (loop through properties of any object)
var names = {"P1":"ABC", "P2":"MNO", "P3":"XYZ"}
for(n in names) {console.log(n+" - "+names[n])}

let arr = ["JS", "C++", "Java"]
for (let n in arr) console.log(arr[n]);         //iterating through an array


// for/of (loop through the value of iterable objects)
var fruits= ["apple","banana","mango"]
for (let f of fruits) {console.log(f)}

let map = new Map()
map.set("A", "Apple")
map.set("B", "Banana")
map.set("C", "Carrot")
for (const [key, value] of map) console.log(key+"  "+value);

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

// filter - returns values
let num = [1,2,3,4,5,6]
const newnum = num.filter(numbers => numbers % 2 === 0)
console.log(newnum);

let dynamicLangs = langs2.filter(lang => {
    return lang.name === "Py" || lang.name === "JS"
})
console.log(dynamicLangs);
dynamicLangs.forEach(keys => console.log(keys.name))    //Getting the names of langs

// map function
let doubleNums = num.map(number => number *2)   //returns val after performing operation
console.log(doubleNums);

let numbers = [10,20,30,40,50]
let opMap =  numbers.map(i => i / 2).map(i => i++).filter(i => i%2===0)
console.log(opMap);         //the resultant array of function will be input to next array

// reduce function: (param1,param2) param1: inital value (0 default), param2: iteration value
const points = [1,2,3,4,5]
let score = points.reduce((total, nextPoint)=> total+nextPoint, 20) // 20 is the initial value
console.log(score);

let course = [{name:"JS",cost:200}, {name:"Python",cost:170}, {cost:"C++",cost:100}]
let totalCost = course.reduce(function(total,price) {return total+price.cost}, 0)
console.log(totalCost);