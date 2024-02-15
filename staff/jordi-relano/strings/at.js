function at(string, index) {
    debugger
    // Sabemos que at nos devuelve un caracter según la posición que indiquemos en el string
    // Además, podemos buscar con negativos ( des de el final) o al principio desde posición 0
    // Creamos una variable auxiliar para el caracter que queramos extraer
    // Ya tenemos el valor del indice, que vendrá dado cuando llamemos la función
    // Así que, si es positivo queremos que nos saque el valor del indice en el string
    // Si es negativo calculamos la posición del caracter a extraer (restando la longitud del string el valor del indice)
    // Si restamos 6 al total comenzamos desde atrás tecnicamente, si es positivo simplemente buscamos esa posición desde el inicio del string y lo metemos en la varaible auxiliar char
    var character = ""
    if (index > 0) {
        debugger
        character = string[index];
        return character
    } else {
        character = string[string.length + index];
        return character
    }

};

// CASE 1

var s = 'hola mundo'

var char = at(s, 6)
// 'u'

// CASE 2

var s = 'hola mundo'

var char = at(s, 20)
// undefined

// CASE 3

var s = 'hola mundo'

var char = at(s, -4)
// 'u'