function endsWith(string, searchString) {
  // TODO implement me
  // inicializar un bucle con una variable que lea el string hacia atras, la variable i a de ser mayor o igual que el largo del string menos el largo del searchstring, restar la variable i en cada interacción
  //dentro del primer bucle, inicializar otro bucle que lea el searchstring hacia atras, la variable j sea mayor o igual que 0, restar la variable j en cada interacción
  //si la variable i es igual al searchstring, devuelve true, sino devuelve j
  for (var i = string.length - 1; i >= string.length - searchString.length; i--) {
    for (var j = searchString.length - 1; j >= 0; j--) {
      if (string[i] === searchString[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}


// CASE 1

//var s = "hola mundo";

//var result = endsWith(s, "ndo");

//console.log(result);
// true

// CASE 2

var s = "hola mundo";

var result = endsWith(s, "tre");

console.log(result);
// false
