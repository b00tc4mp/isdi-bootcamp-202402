function endsWith(string, searchString) {
  var ultimaPosicio = searchString.length - 1;
  var ultimaPosicioString = string.length - 1;

  for (var i = ultimaPosicio; i >= 0 && ultimaPosicioString >= 0; i--) {
    if (searchString[i] !== string[ultimaPosicioString]) {
      return false;
    }
    ultimaPosicioString = ultimaPosicioString - 1;
  }
  return true;
}

// CASE 1

var s = "hola mundo";

var result = endsWith(s, "ndo");

console.log(result);
// true

// CASE 2

var s = "hola mundo";

var result = endsWith(s, "tre");

console.log(result);
// false

// CASE 3

var s = "hola mundo";

var result = endsWith(s, "en un lugar de la Mancha");

console.log(result);
// false

// CASE 4

var s = "hola mundo";

var result = endsWith(s, "en un lugar de hola mundo");

console.log(result);
// true
