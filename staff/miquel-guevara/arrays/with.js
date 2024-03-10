//Devuelve una nueva matriz con el elemento en el índice dado reemplazado por el valor dado.

delete Array.prototype.with;

function withh(array, index, value) {
  //TODO implement me
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray[newArray.length] = array[i];
  }
  newArray[index] = value;

  return newArray;
}

//CASE 1
var arr = [1, 2, 3, 4, 5];
var result = withh(arr, 2, 6);

console.log(result);
//OUTPUT [1, 2, 6, 4, 5]

console.log(arr);
//OUTPUT [1, 2, 3, 4, 5]
