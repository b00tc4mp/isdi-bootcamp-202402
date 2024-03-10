//agrega los elementos especificados al comienzo de una matriz y devuelve la nueva longitud de la matriz.

delete Array.prototype.unshift;

function unshift(array, newElements) {
  var newArray = [];

  for (var i = 0; i < newElements.length; i++) {
    newArray[i] = newElements[i];
  }

  for (var j = 0; j < array.length; j++) {
    newArray[newElements.length + j] = array[j];
  }

  for (var k = 0; k < newArray.length; k++) {
    array[k] = newArray[k];
  }

  return array.length;
}

//CASE 1
var array1 = [1, 2, 3];
var newElements = [4, 5];
var result = unshift(array1, newElements);

console.log(result);
// Expected output: 5
console.log(array1);
// Expected output: [4, 5, 1, 2, 3]

//CASE 2
var array2 = [1, 2];
var newElements = [0];
var result = unshift(array2, newElements);

console.log(result);
//OUTPUT 3
console.log(array2);
//OUTPUT [0, 1, 2]

//CASE 3
var array3 = [0, 1, 2];
var newElements = [-2, -1];
var result = unshift(array3, newElements);

console.log(result);
//OUTPUT 5
console.log(array3);
//OUTPUT [-2, -1, 0, 1, 2]
