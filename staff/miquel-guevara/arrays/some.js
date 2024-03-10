//prueba si al menos un elemento de la matriz pasa la prueba implementada por la función proporcionada. Devuelve verdadero si, en la matriz, encuentra un elemento para el cual la función proporcionada devuelve verdadero; de lo contrario devuelve falso. No modifica la matriz.
delete Array.prototype.some;

function some(array, callback) {
  //TODO implement me
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      return true;
    }
  }
  return false;
}

//CASE 1
var array1 = [25, 98, 64, 96, 35];
var result = some(array1, function (x) {
  return x < 100;
});
console.log(result);
// Expected output: true

//CASE 2
var array1 = [25, 98, 64, 96, 35];
var result = some(array1, function (x) {
  return x < 20;
});
console.log(result);
// Expected output: false

//CASE 3
var array1 = [];
var result = some(array1, function (x) {
  return x < 50;
});
console.log(result);
// Expected output: false
