// devuelve el primer índice en el que se puede encontrar un elemento determinado en la matriz, o -1 si no está presente.

delete Array.prototype.indexOf;

function indexOf(array, searchElement) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }

  return -1;
}

console.log("CASE 1");
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
var element = "Apple";
var s = indexOf(fruits, element);

console.log(s);
//OUTPUT 2

console.assert(s === 2, "2");
//'2'

console.assert(fruits[0] === "Banana");
console.assert(fruits[1] === "Orange");
console.assert(fruits[2] === "Apple");
console.assert(fruits[3] === "Mango");
console.assert(fruits[4] === "Pineapple");

// ["Banana", "Orange", "Apple", "Mango", "Pineapple"]
console.assert(fruits.length === 5, "5");
// [5]

console.log("CASE 2");
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
var element = "Kiwi";
var s = indexOf(fruits, element);

console.log(s);
//OUTPUT -1

console.assert(s === -1, "-1");
//'-1'

console.assert(fruits[0] === "Banana");
console.assert(fruits[1] === "Orange");
console.assert(fruits[2] === "Apple");
console.assert(fruits[3] === "Mango");
console.assert(fruits[4] === "Pineapple");
// ["Banana", "Orange", "Apple", "Mango", "Pineapple"]

console.assert(fruits.length === 5, "5");
// [5]

console.log("CASE 3");
var fruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
var element = 0;
var s = indexOf(fruits, element);

console.log(s);
//OUTPUT -1

console.assert(s === -1, "-1");
//'-1'

console.assert(fruits[0] === "Banana");
console.assert(fruits[1] === "Orange");
console.assert(fruits[2] === "Apple");
console.assert(fruits[3] === "Mango");
console.assert(fruits[4] === "Pineapple");
// ["Banana", "Orange", "Apple", "Mango", "Pineapple"]

console.assert(fruits.length === 5, "5");
// [5]
