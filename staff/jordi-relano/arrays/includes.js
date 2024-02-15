delete Array.prototype.includes

debugger

function includes(array, searchElement, fromIndex) {

    if (fromIndex === undefined) {
        for (var i = 0; i < array.length; i++) {
            if (searchElement === array[i])
                return true
        }
    } else if (fromIndex !== undefined) {
        for (var j = fromIndex; j < array.length; j++) {
            if (searchElement === array[j])
                return true
        }
    }
    return false
}

// CASE 1
var numeros = [1, 2, 3];
var s = 1;  // searchElement
var t = 1;  // fromIndex
var result1 = includes(numeros, s, t); // variable que subimos a la función para que nos filtre
console.log(result1);
//output false

// CASE 2
var pets = ["cat", "dog", "bat"];
var s1 = "cat"; // searchElement
var t2 = 5; // fromIndex
var result2 = includes(pets, s1, t2); // variable que subimos a la función para que nos filtre
console.log(result2);
//output false

// CASE 3
var truscuTruscu = ["lamborgini", "petunia", 2, 5];
var s2 = "petunia"; // searchElement
var t3 = -100; // fromIndex
var result3 = includes(truscuTruscu, s2, t3); // variable que subimos a la función para que nos filtre
console.log(result3);
//output true

// CASE 4
var pumba = ["jesus", "petunia"];
var s3 = "petunia"; // searchElement
var result4 = includes(pumba, s3); // variable que subimos a la función para que nos filtre
console.log(result4);

//output true




