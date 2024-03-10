// elimina el primer elemento de una matriz y devuelve ese elemento eliminado. Este método cambia la longitud de la matriz.

delete Array.prototype.shift;

function shift(array) {
  var result;

  if (array.length === 0) {
    return undefined;
  }

  if (array.length > 0) {
    result = array[0];

    for (var i = 0; i < array.length; i++) array[i] = array[i + 1];

    array.length--;
  }
  return result;
}

//CASE 1
var array1 = [1, 2, 3];
var firstElement = shift(array1);

console.log(array1);
//OUTPUT [2, 3]

console.log(firstElement);
//OUTPUT: 1

//CASE 2
var array2 = [58, 45, 93, 156];
var firstElement = shift(array2);

console.log(array2);
//OUTPUT [45, 93, 156]

console.log(firstElement);
//OUTPUT: 58

//CASE 3
var array3 = [];
var firstElement = shift(array3);

console.log(array3);
//OUTPUT [undefined]

console.log(firstElement);
//OUTPUT: undefined

//CASE 4
var array2 = [58, 45, 93, 156, 589, 684, 98];
var firstElement = shift(array2);

console.log(array2);
//OUTPUT [45, 93, 156, 589, 684, 98]

console.log(firstElement);
//OUTPUT: 58
