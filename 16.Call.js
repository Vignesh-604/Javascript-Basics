// *** call ***

function SetUsername(name) {
    this.name = name
    console.log("Function is being called");
    console.log(this);                      // EC changed to other function's EC
}

function UserLogin(name, email, password) {
    // SetUsername(name)                       // Reference of function
    // Once this function is called, it's Func Exec Context will be removed and variables defined inside will also be lost
    // Once an instance is made, the Functional EC isn't taken into consideration
    // new keyword creates a new empty object and injects new properties into it

    // this keyword in parameter states that the other function will use the same EC as this function
    SetUsername.call(this, name)                        //since it's an instance it's only {}
    this.email = email
    this.password = password
    console.log(this);
}

let user1 = new UserLogin("Tim", "tim@gmail.com", "password")
console.log(user1);
