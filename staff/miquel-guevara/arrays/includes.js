delete Array.prototype.includes;

function includes(array, searchElement, fromIndex) {
  //fromindex es negatiu que no peti el for
  //fromIndex es menor que 0
  if (fromIndex < 0) {
    fromIndex = 0;
  }
  for (var i = fromIndex; i < array.length; i++) {
    if (searchElement === array[i]) {
      return true;
    }
  }
  return false;
}

//CASE 1
var number = [10, 20, 30];
var searchElement = 10;
var fromIndex = 2;
var result = includes(number, searchElement, fromIndex);
console.log(result);
// Expected output: false

// //CASE 2
var fruits = ["apple", "kiwi", "pear"];
var searchElement = "apple";
var fromIndex = 0;
var result = includes(fruits, searchElement, fromIndex);
console.log(result);
// Expected output: true

// //CASE 3
var pupurri = ["taza", "tetera", 1, 3];
var searchElement = 1;
var fromIndex = 100;
var result = includes(pupurri, searchElement, fromIndex);
console.log(result);
// Expected output: false

// //CASE 4

var arr = ["a", "b", "c"];
var searchElement = "a";
var fromIndex = -9000;
var result = includes(arr, searchElement, fromIndex);
console.log(result);

// arr.includes("a", -100); // true
// arr.includes("b", -100); // true
// arr.includes("c", -100); // true
