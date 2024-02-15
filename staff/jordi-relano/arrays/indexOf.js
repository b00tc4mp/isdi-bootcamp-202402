delete Array.prototype.indexOf

// El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

function indexOf(array, searchElement) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return i;
        }

    }
    return -1
}
// hacemos bucle para iterar dentro del array, si dentro del array la posición de la iteración de i es igual al elemento que estás buscando, te devuelve esa misma i ( que será el indice que estás buscando)
// entonces cuando i es 2 dse va al array, ve que es 2, te sca apple, coincide con searchelement (apple) y te devuelve la misma i que es el indice coincidente
var fruits = ["Banana", "Orange", "Apple", "Mango", "Jesus"];
var element = "Apple";
var a = indexOf(fruits, element);
console.log(a);


// CASE 1

var array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

const array = ["a", "b", "a", "c", "a", "d"];

var s = "b"
var search = indexOf(array, s, 2);
console.log(search)
//output 

const num1 = [1, 2, 3];

var c = 2
var param = indexOf(c, 6)
console.log(param)