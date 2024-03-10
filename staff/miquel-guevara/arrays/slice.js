//devuelve una copia superficial de una parte de una matriz en un nuevo objeto de matriz seleccionado desde start( end no endincluido) donde starty endrepresenta el índice de elementos de esa matriz. La matriz original no se modificará.
delete Array.prototype.slice;

function slice(array, start, end) {
  //TODO implement me

  var newArray = [];

  if (start >= 0 && end <= array.length) {
    for (var i = start; i < end; i++) {
      newArray[i - start] = array[i];
    }
  }

  return newArray;
}

//CASE 1
var array = [1, 2, 3, 4, 5];
var result = slice(array, 1, 4);
console.log(result);
// Output: [2, 3, 4]

//CASE 2
var array = [1, 2, 3, 4, 5];
var result = slice(array, 1, 10);
console.log(result);
// Output: []
