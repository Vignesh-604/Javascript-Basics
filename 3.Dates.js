// Date function
let date = new Date()
console.log(typeof date);
console.log(date.toString());
console.log(date.toDateString());                   // only date
console.log(date.toLocaleString());                 //Date according to local standards
console.log(date.toLocaleDateString("en-US"));      //Date according to US standards


console.log(date.getMonth() + 1);
console.log(date.getSeconds());

let date1 = new Date(2023, 0, 23)         //Month index starts from 0
console.log(date1.toDateString());

let date2 = new Date(2023, 0, 23, 6, 23, 6)     //year-mon-day-hour-min-sec
console.log(date2.toLocaleString());

let date3 = new Date("06-16-2023")
console.log(date3.toLocaleString());

console.log(date3.getTime());
console.log(Date.now())
