delete Array.prototype.concat;

function concat(arr1, arr2) {
  var newArray = [];
  for (var i = 0; i < arguments.length; i++) {
    var array = arguments[i];

    for (var j = 0; j < array.length; j++) {
      var element = array[j];

      newArray[newArray.length] = element;
    }
  }
  return newArray;
}

//var newArray = [];
// for(var i = 0; i < arguments.length; i++){
//     var argument = arguments[i]
// }
// for(var j = 0; j < argument.length; j++){
//     var element = argument[j]

// //  for (var j = 0; j < array.length; j++) {
//     var element = array[j]

//     newArray[newArray.length] = element

// }
// return newArray
// }

// CASE 1

var arr1 = [100, 200, 300, 400, 500];

var arr2 = ["hola", "que", "tal"];

var arr = concat(arr1, arr2);

console.log(arr);
// 400

// CASE 2

var arr1 = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];

var arr2 = ["hola", "que", "tal"];

var arr = concat(arr1, arr2);

console.log(arr);
// ' '

// CASE 3

var arr1 = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];

var arr2 = [1, "que", "tal"];

var arr = concat(arr1, arr2);

console.log(arr);
// 'n'

// CASE 4

var arr1 = ["h", "o", "l", "a", " ", "m", "u", "n", "d", "o"];

var arr2 = ["hola", 56, "tal"];

var arr = concat(arr1, arr2);

console.log(arr);
// undefined

//instance of

//arguments
