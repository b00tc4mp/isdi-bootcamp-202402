//se utiliza para fusionar dos o más matrices. Este método no cambia las matrices existentes, sino que devuelve una nueva matriz.

delete Array.prototype.concat;

function concat(arr1, arr2) {
  // TODO implement

  var concatenatedArray = [];

  for (var i = 0; i < arr1.length; i++) {
    concatenatedArray[concatenatedArray.length] = arr1[i];
  }

  for (var j = 0; j < arr2.length; j++) {
    concatenatedArray[concatenatedArray.length] = arr2[j];
  }

  return concatenatedArray;
}

console.log("CASE 1");
var arr1 = ["Miky"];
var arr2 = ["Guevara"];

var arr = concat(arr1, arr2);
//console.log(arr);
//OUTPUT ["Miky", "Guevara"]

console.assert(arr[0] === arr1[0], "Miky");
console.assert(arr[1] === arr2[0], "Guevara");

console.log("CASE 2");
var num = [1];
var arr1 = ["Miquel"];

var arr = concat(num, arr1);
// console.log(arr);
console.assert(arr[0] === num[0], 1);
console.assert(arr[1] === arr1[0], "Miquel");

//OUTPUT [1, "Miquel"]

console.log("CASE 3");

var arr1 = ["Pol"];
var arr2 = ["Jan"];

var arr = concat(arr2, arr1);
//console.log(arr);
console.assert(arr[0] === arr2[0], "Pol");
console.assert(arr[1] === arr1[0], "Jan");
//OUTPUT ["Pol", "Jan"]

//var separator = " ";

//SOLUCION DEFINITIVA
delete Array.prototype.concat;
function concat(arr1, arr2) {
  // TODO implement
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    newArray[newArray.length] = arr1[i];
  }
  for (var j = 0; j < arr2.length; j++) {
    newArray[newArray.length] = arr2[j];
  }
  return newArray;
}

console.log("CASE 1");
var arr1 = ["Pol"];
var arr2 = ["Guevara"];

var arr = concat(arr1, arr2);
//console.log(arr);
console.assert(arr[0] === arr1[0], "Pol");
console.assert(arr[1] === arr2[0], "Guevara");
//OUTPUT "Pol Guevara"

console.log("CASE 2");
var num = [1];
var arr1 = ["Jan"];

var arr = concat(num, arr1);
//console.log(arr);
console.assert(arr[0] === num[0], 1);
console.assert(arr[1] === arr1[0], "Jan");
//OUTPUT "1 Jan"

console.log("CASE 3");
var arr1 = ["Jan"];
var arr2 = ["Guevara"];

var arr = concat(arr2, arr1);
//console.log(arr);
console.assert(arr[0] === arr2[0], "Guevara");
console.assert(arr[1] === arr1[0], "Jan");
//OUTPUT "Guevara", "Jan"

console.log("CASE 4");
var arr1 = [1, 5, 8];
var arr2 = ["j", "h", "l", "r"];

var arr = concat(arr1, arr2);
console.log(arr);
console.assert(arr[0] === arr1[0], "1");
console.assert(arr[1] === arr1[1], "5");
console.assert(arr[2] === arr1[2], "8");
console.assert(arr[3] === arr2[0], "j");
console.assert(arr[4] === arr2[1], "h");
console.assert(arr[5] === arr2[2], "l");
console.assert(arr[6] === arr2[3], "r");
// [1,5,8,"j","h","l","r"]

//SOLUCION ALTERNATIVA CUANDO QUIERES CONCATENAR + DE 2 ARRAYS
function concat(arr1, arr2) {
  // TODO implement
  var newArray = [];
  var concatenatedArrays = [];
  for (var i = 1; i < arguments.length; i++) {
    concatenatedArrays[i - 1] = arguments[i];
  }
  for (var i = 0; i < arr1.length; i++) {
    var element = arr1[i];

    newArray[i] = element;
  }
  for (var i = 0; i < concatenatedArrays.length; i++) {
    var currentArray = concatenatedArrays[i];
    for (var j = 0; j < currentArray.length; j++) {
      var element = currentArray[j];

      newArray[newArray.length] = element;
    }
  }

  return newArray;
}

console.log("CASE 1");
var nums = [1, 5, 63, 89, 90];
var animals = ["cows", "goats", "ships"];
var fruits = ["oranges", "apples", "lemons", "bananas"];
var cars = ["lambo", "ferrari", "mercedes", "seat"];

var result = concat(nums, animals, fruits, cars);
console.log(result);

console.assert(result[0] === nums[0], "1");
console.assert(result[1] === nums[1], "5");
console.assert(result[2] === nums[2], "63");
console.assert(result[3] === nums[3], "89");
console.assert(result[4] === nums[4], "90");
console.assert(result[5] === animals[0], "cows");
console.assert(result[6] === animals[1], "goats");
console.assert(result[7] === animals[2], "ships");
console.assert(result[8] === fruits[0], "oranges");
console.assert(result[9] === fruits[1], "apples");
console.assert(result[10] === fruits[2], "lemons");
console.assert(result[11] === fruits[3], "bananas");
console.assert(result[12] === cars[0], "lambo");
console.assert(result[13] === cars[1], "ferrari");
console.assert(result[14] === cars[2], "mercedes");
console.assert(result[15] === cars[3], "seat");

// [1, 5, 63, 89, 90, "cows", "goats", "ships", "oranges", "apples", "lemons", "bananas", "lambo", "ferrari", "mercedes", "seat"]
