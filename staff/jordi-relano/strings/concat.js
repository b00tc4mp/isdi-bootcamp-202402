delete String.prototype.concat

function concat(...parameters) {
    var char = ""
    for (let i = 0; i < parameters.length; i++)
        for (let j = 0; j < parameters[i].length; j++){
            char = char+ parameters[i]
            debugger
    }
    
            return char
}




//d

//CASE 1

const a = 'Hello';
const b = 'World';

console.log(concat(a, b));
// Expected output: "Hello World"

// CASE 2
const c = "Hello, ";
const d = ". Have a nice day."
console.log(concat("Kevin", ". Have a nice day."));
// Hello, Kevin. Have a nice day.

//CASE 3

const greetList = ["Hello", " ", "Venkat", "!"];
"".concat(...greetList); // "Hello Venkat!"

"".concat({}); // "[object Object]"
"".concat([]); // ""
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"


