function concat(arr1, arr2) {
    if (arguments.length < 3) { // aquí argumentos asumimos que son arrays

        var newArray = [];
        for (var i = 0; i < arr1.length; i++) {
            newArray[newArray.length] = arr1[i];

        }
        for (var i = 0; i < arr2.length; i++) {
            newArray[newArray.length] = arr2[i]

        }
        return newArray;
    } else {
        var newArray = [];
        for (let i = 0; i < array.length; i++) {
            var array = arguments[i]

            for (let j = 0; j < array.length; j++) {
                var element = array[j];

                newArray[newArray.length] = element
            }

        }
        return newArray
    }
}

// versión mejorada:

function concat(arr1, arr2) {
    if (arguments.length < 3) {

        var newArray = [];
        for (var i = 0; i < arr1.length; i++) {
            var array = argument[i]

        }
        for (var j = 0; j < arr2.length; j++) {
            newArray[newArray.length] = arr2[j]

        }
    }
}

//versión mejorada 2.0 para undefined y cosas que no son arrays:

function concat(arr1, arr2) {
    if (arguments.length < 3) {

        var newArray = [];
        for (var i = 0; i < arr1.length; i++) {
            var argument = argument[i] // cambiamos nombre de la variable de array a argument, según que tipo de valor nos venga

            if (argument instanceof Array)
                for (var j = 0; j < arr2.length; j++) {
                    newArray[newArray.length] = arr2[j]

                }
        }
    }
}





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
