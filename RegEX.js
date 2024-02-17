// Syntax: /pattern/modifiers;
// Modifiers:- i: Ignore case   g: Global Match     m: Multiline match

//String methods

var str = "I have, a pet cat."

var ser = str.search("pet");
console.log(ser)
var ser2 = str.search(/Pet/i)
console.log(ser2)

var rep = str.replace("cat","dog");
console.log(rep)
var rep2 = str.replace(/CAT/i,"dog")
console.log(rep2)