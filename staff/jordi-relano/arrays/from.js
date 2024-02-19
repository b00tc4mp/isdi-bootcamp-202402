delete Array.prototype.from
// es una función estática

function from(arrayLike,) {



}





// CASE 1

console.log(from('foo'));
// Expected output: Array ["f", "o", "o"]

// CASE 2

var set = new Set(["foo", "bar", "baz", "foo"]);
var arraySet = from(set);
// [ "foo", "bar", "baz" ]

// CASE 3

console.log(from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

// arrayLike
// Objeto iterable para convertirlo en un array.

// mapFnOpcional
// Función de mapa para llamar a cada elemento de la matriz.

// thisArgOpcional
// Valor para usar como this al ejecutar mapFn