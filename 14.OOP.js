const user = {                          // Object Literal (normal object)
    name: "Bob",
    id: 101,
    login: true,
    hello: function() {console.log(`Hello ${this.name}`)},
    currentContext : function(){console.log(this);},
    currentContext2 : () => console.log(this)
}
user.hello()
user.currentContext()               // for normal functions it is the given object
user.currentContext2()              // for arrow funcs, it is empthy object

// Constructor
function userDetails(id, name, login) {
    this.id = id                            //this.id is a variable and id is parameter
    this.name = name
    this.login = login
    this.hello = function() {return (`Welcome ${this.name}`);}
    return this              // implicitly defined : will work even if not defined FOR INSTANCES ONLY
}

let userOne = userDetails(1, "Tom", true)
let userTwo = userDetails(2, "Bob", false)            // the value of userOne get overwritten by userTwo
console.log(userOne);                           //All key value pairs of this in current execution context (node) are also shown
console.log(userOne.hello());

// new keyword creates an empty obj
// a constructor function is called and given args are packed into the empty object.
// then they're injected into the this keyword
let userThree = new userDetails(3, "Ken", true)     // Creates an instance of the given class
let userFour = new userDetails(4, "God", false)     // Doesn't overwrite the values 
console.log(userThree.hello());                             // Only created values are shown

console.log(userFour.constructor);                  // it's a reference to the created function
console.log(userFour instanceof userDetails);       // to check if something is an instance of a function

// Class keyword
class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `Encrypted ${this.password}`
    }
}
const jim = new User("Jimbo", "jim@gmail", "jim09")
console.log(jim.encryptPassword());


// exactly similar to below code
function User2(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password
}
User2.prototype.encryptPassword = function() {return `Encrypted ${this.password}`}

console.log(new User2("Tim","tim@gmail","tim09").encryptPassword());


// ** Inheritence **
class Person{
    constructor(name){
        this.name = name
    }
    greeting(){
        return `Hello ${this.name}`
    }
}

class Costumer extends Person{
    constructor(name, email, password){
        super(name);                         // Gets the value from the extending class
        this.email = email
        this.password = password
    }
    welcome(){
        return `Welcome ${this.name}`
    }
}

const pym = new Costumer("Pym", "pym@mail", "pym09")
console.log(pym.greeting());

console.log(pym instanceof Costumer);
console.log(pym instanceof Person);             // Also an instance since it's being inheritted


// static
class Player{
    constructor(name){
        this.name = name
    }
    static createId(){              // restricts the use of a func by an instance
        return "unique ID"          // won't be accessed by current class or inheritted class
    }
}
const plOne = new Player("Kim");
// console.log(plOne.createId());