delete String.prototype.at;
//crear una variable auxiliar "character" para el carácter a extraer
//Mirar si el índice es positivo o negativo, plantear dos flujos
//En caso de índice positivo extraer la posición del caracter del string a partir del índice (pasandolo por corchete) y asignarlo a la variable 
//En caso de índice negativo calcular la posición del carácter a extraer restando la longitud del string el valor de índice (pasando el resultado de la resta entre corchetes) y asignarlo a la variable
//Retornar el valor de la variable

function at(string, index) {
    var character 

    if (index >= 0) {
        character = string[i] 
    } else {
        newIndex = string.length + index
        character = string[newIndex]
    }
    return character
}


function at(string, index) {
    if (index < 0) {
        return string[string.length - (index) * -1] 
    }
    return string[index]
}

// CASE 1

var s = 'hola mundo';

var char = at(s, 6);
// 'u'

// CASE 2

var s = 'hola mundo';

var char = at(s, 20);
// undefined

// CASE 3

var s = 'hola mundo';

var char = at(s, -4);
// 'u'
