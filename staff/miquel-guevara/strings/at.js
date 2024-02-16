delete String.prototype.at;

function at(string, index) {
  //Cear una variable auxiliar 'character' para el caracter  a extraer
  //Mirar el indice si es positivo o negativo, plantear dos flujos
  //En caso que el indice sea positivo, extraer el caracter del string a partir del indice (pasandolo por corchetes), y asignarlo a la variable 'character'
  //En caso que el indice sea negativo, calcular la posicion del caracter a extraer restando a la longitud del string el valor de indice (pasando el resultado de la resta entre corchetes) y asignarlo a la variable 'character'
  //Retornar el valor de 'character'

  var character;

  if (index >= 0) {
    character = string[index];
  } else {
    var newIndex = string.length + index;

    character = string[newIndex];
  }

  return character;
}
// CASE 1

var s = "hola mundo";

var char = at(s, 6);
console.log(char);
// 'u'

// CASE 2

var s = "hola mundo";

var char = at(s, 20);
console.log(char);
// undefined

// CASE 3

var s = "hola mundo";

var char = at(s, -4);
console.log(char);
// 'u'
