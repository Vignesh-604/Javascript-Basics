// Classs based getter - setter
class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    // The set syntax binds an object property to a function to be called when there is an attempt to set that property.
    set password(value) {
        this.newPassword = value
    }
    //The get syntax binds an object property to a function that will be called when that property is looked up
    get password() {
        return this.newPassword.toUpperCase()
    }
}
let u1 = new User("tim@mail", "tim")
console.log(u1.password);

// If the variable name while defining and and variable name in setter are same then it will go into race condition.
// Both are trying to assign value and it will throw Maximum callstack exceeded error (Stack Overflow)

// Function based getter - setter
function UserTwo(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, "password",{        // property name
        get: function() {
            return this._password.toUpperCase()
        },
        set: function(val) {
            this._password = val
        }
    })
}
let u2 = new UserTwo("pam@mail", "abc")
console.log(u2.password);

// Object based getter - setter
const UserThree = {
    _email : "ken@mail",        // _email is a private propeerty / like a new variable
    _password : "ken",

    get email(){
        return this._email.toUpperCase()    // getter defines the function of the new property
    },
    set email(value){
        this._email = value         // setter sets the value in new property = email
    }
}
let u3 = Object.create(UserThree)
console.log(u3.email);