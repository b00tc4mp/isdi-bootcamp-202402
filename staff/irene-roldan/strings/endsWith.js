delete String.prototype.endsWith

function endsWith(string, searchString) {
    var searchStringIndex = 0 //variable para buscar la posición de searchString
    var numOks = 0 //variable para saber el número de coincidencias
    for (var i = (string.length - searchString.length); i < string.length; i++) { //i=10(porque es el final)-3(7); 7<10

        if (string[i] === searchString[searchStringIndex]) { //si la letra coincide con searchstring[0] = 'd'
            numOks++ //suma 1 a los aciertos
        }
        searchStringIndex++ //suma uno al índex de searchString
    }
    if(numOks === searchString.length){ //si el número de aciertos es igual al length de lo buscado
        return true //devuelve true
    }else{
        return false
    }
}

console.log('CASE 1')
var s = 'hola mundo'
var result = endsWith(s, 'dos')

console.assert(result === false, 'result should be false')