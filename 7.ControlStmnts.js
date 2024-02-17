//Conditional operators: > < == === >= <= != && ||
var s = 10
var t = 10
if (t===s) {console.log("They have the same value & datatype")
}
else if (t == s) {console.log("They have the same value but not datatype")
}
else {console.log("They are not equal")
}

// Terniary operators
var marks = 70

var pass = (marks >= 80) ? console.log("Passed") : console.log("Fail")
var num=(s==t) ? console.log("Both are equal") : console.log("Both are not equal");

// Switch
let key = 2
switch (key) {
    case 1:
        console.log("One");
        break;                //if case is matched, all statements after that will execute therefore break to end execution
    case 2:
        console.log("Two");
        break;
    default:
        console.log("None");
        break;
}

// Truthy Falsey values - assuming value is true or false with operator
let email = "hello@gmail"
if (email) console.log("Hello user!!");     //No comparision operator used
// falsey values: false, 0, -0, "", null, BigInt 0n, undefiend, NaN
// truthy values: "0", "false", " ", [], {}, function(){} -and all everything else

//Nullish Coalescing Operator (??): null undefined
let val1, val2, val3
val1 = 5 ?? 10
val2 = null ?? 20                       // works like an if else
val3 = undefined ?? 15 ?? 30            // if the acquired value doesn't fit, it'll take the next value
console.log(val1, val2, val3);
console.log("\n");
