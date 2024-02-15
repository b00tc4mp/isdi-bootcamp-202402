delete Array.prototype.at

function at(array, index) {
    if (index < -1) { // es más eficiente meter -1, porque así dices lo mismo que <= que 0)
        var element = array[index];
        return element
    } else {
        var newIndex = array.length + index
        var element = array[newIndex]
        return element
    }

}

// VERSIÓN MEJORADA AT:

function at(array, index) {
    var element
    if (index < -1) // es más eficiente meter -1, porque así dices lo mismo que <= que 0)
        element = array[index]
    // te puedes ahorrar la llave de antes del else si sólo hay una linia arriba  } else { 
    else {
        var newIndex = array.length + index

        var element = array[newIndex]

    }
    return element
}

// VERSIÓN MEJORADA X2 CON OPERADOR TERNARIO AT:


function at(array, index) {
    var targetIndex = index > -1 ? index : array.length + index
    // un ternario hace el efecto de un if/else
    // si index es mayor que -1 devuelves index, sino la longitud de array + indice
    var element = array[targetIndex]

    return element
}

// MÁS COMPRIMIDO


function at(array, index) {
    return array[index > -1 ? index : array.length + index]
}


// queremos traer un elemento de un array contando desde atrás:

// CASE 1

var nums = [100, 200, 300, 400, 500]

var num = at(nums, 3)

console.log(num)
// 400

// CASE 2

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

var char = at(chars, 4)

console.log(char)
// ' '

// CASE 3

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

var char = at(chars, -3)

console.log(char)
// 'n'

// CASE 4

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

var char = at(chars, -30)

console.log(char)
// undefined