delete Array.prototype.concat

function concat(...param) {
    var char = "";
    var arrayResult = [];
    // creamos variable auxiliar donde cargar datos, y otra donde ir nutriendo el nuevo array concatenado traspasando los datos de la variable char

    for (let i = 0; i < param.length; i++) {
        debugger
        for (let j = 0; j < param[i].length; j++) {
            char = param[i][j];
            arrayResult[arrayResult.length] = char;
            char = "";
        }

    }
    return arrayResult

}


//instance: crear nuevo objeto

// CASE 1
const num1 = [1, 2, 3];
const num2 = [4, 5];
const num3 = [7, 8, 9];

var param = concat(num1, num2, num3)
console.log(param)
//output var param = [1,2,3,4,5,7,8,9];

// CASE 2
var a = ["melindro", "aspargata"];
var nombre = ["jesus"];

var cosas = concat(a, nombre);
console.log(cosas);
//output 

// CASE 3
var a = ["melindro", "aspargata"];
var nombre = [1, 2, 3];

var cosas = concat(a, nombre);
console.log(cosas);
//output

// CASE 4

var chars = ["señor", "pam"]
var chars2 = ["señor", "pam", undefined]

var char = concat(chars, chars2)

console.log(char);
//output
