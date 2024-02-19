// Promise object represents the completion or failure of an async operation
// Used in async tasks: DB calls, cryptography, network ops
const promiseOne = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async task completed");
        resolve()                               //For successful completion of promise
    },1000)
})
promiseOne.then(()=>{
    console.log("Promise 1 consumed.");       //connected with resolve()- won't execute if not resolved
})

// Without variables
new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task 2 completed");
        resolve()
    },500)                                              // since no time frame given, this will be executed first
}).then(function(){
    console.log("Promise 2 completed");
})

// Passing parameters
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({extension:"JS",language:"Javascript"})
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);                      //parameters passed in resolve() can be accessed here
    console.log("Promise 3 completed");
})

// Promise chain: .then().then().catch().finally()
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if (error) resolve("SUCCESS")               // parameters passed to .then()
        else reject("ERROR")                        // parameters passed to .catch()
    },1000)
})

promiseFour
.then((message)=>{
    console.log(message);
    return "Welcome user"                           // returned values will be stored and used in the next .then() only
})
.then((user)=>{
    console.log(user);                              // parameters recieved from previous .then()
})
.catch((message)=>{
    console.log(message);                           // connected with reject()- won't execute if not rejected
})
.finally(() => console.log("Promise 4 completed"))  // Will execute after resolve or reject 


/* Async await
An async function declaration creates an AsyncFunction object. 
Each time when an async function is called, it returns a new Promise which will be resolved with the value returned
by the async function, or rejected with an exception uncaught within the async function.

Async functions can contain zero or more await expressions.
Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected.
The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.
*/
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if (error) resolve("Async function")
        else reject("Some error")
    },1000)
})

async function consumePromise5() {                      // creates a new AsyncFunction object
    try{
        const response = await promiseFive        // suspends execution till given promise is executed and holds resolved response
        console.log(response);
    } catch(error) {
        console.log(error);                             // to handle reject()
    }
}
consumePromise5()

async function getData() {
    try {
        const response = await fetch("https://api.github.com/users/Vignesh-604")    // await suspends execution of further commands until response is completely fetched
        console.log(response);
        const data = await response.json()          // await waits for the entire response object to become JSON before moving on
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Completed");
    }
}
// getData()

// Fetching data using then-catch (like async wait)
fetch("https://api.github.com/users/Vigneshsws604")       // returns a Promise object
.then((response)=>{                                     // response stores the data fetched -> resolve(--data fetched--)
    console.log(typeof response);
    return response.json()                              // returns the response in JSON format accessible by next .then()
})
.then((data)=>{
    console.log(data);                          // no need of await -> then() will be executed only after previous function is successfully executed
})                                              // In case of wrong username, response will be an object (not an error)
.catch((error) => {console.log(error);})

// fetch() related functions are executed before setTimeout() ones because they are passed into a high priority queue (Microtask queue)
// In case of HTTP errors like 404 not found, the message will be passed as response (resolve()) and not as an error
// Error will only be in the case if fetch couldn't make a request with the browser