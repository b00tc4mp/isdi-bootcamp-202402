//delete String.prototype.concat;
//var separator = " ";
function concat(arr1, arr2) {
    // TODO implement
    var newArray = [];
    for (var i = 0; i < arr1.length; i++) {
        newArray[newArray.length] = arr1[i];
        // me meto en la longitud del newArray, que es 0, y le decimos que ahí le queremos dar el valor de la iteración de los arrays (perico), ya no le va a meter más elementos. 1 no es menor que 1, así que el bucle para
    }
    for (var j = 0; j < arr2.length; j++) {
        newArray[newArray.length] = arr2[j]
        // ahora volvemos a meternos en la longitud del array que creamos ( que ya es 1 el indice), y ahí detrás añadimos un elemento push manual asignandole el valor que nos da la iteración j en el arr2.
    }
    return newArray;
    // salimos fuera de los bucles y devolvemos el valor fuera para poder ejecutar el console.log
}

// Si tienes un array  var arr1 = ["Perico"];
// le metes arr1[arr1.length] = 50
// te sale arr1 = ["Perico", 50];
// nums = [1,2,3,1000];
// nums[nums.length+10] = 1000
// esto te dará el array nums = [1,2,3, empty x10, 1000]

//CASE 1
var arr1 = ["Perico"];
var arr2 = ["De los palotes"];

var arr = concat(arr1, arr2);
console.log(arr);
//la variable arr tiene una copia del valor del newArray de dentro de la función, porque lo hemos sacado fuera con return
//OUTPUT "Perico De los palotes"

//CASE 2
var num = [1];
var arr1 = ["De picas"];

var arr = concat(num, arr1);
console.log(arr);
//OUTPUT "1 De picas"

//CASE 3
var arr1 = ["Xavi"];
var arr2 = ["Gonzalez"];

var arr = concat(arr2, arr1);
console.log(arr);
//OUTPUT "Gonzalez 8 Xavi"