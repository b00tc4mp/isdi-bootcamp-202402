delete Array.prototype.at

function at(array, index) {
    var char = ""
    if (index > 0) {
        char = array[index];
        return char
    } else {
        // nos metemos en el array, buscamos su longitud, y a esa le sumamos el negativo: positivo y negativo nos da negativo ( hará el efecto de comenzar por atrás)
        char = array[array.length + index];
        return char;
    }
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