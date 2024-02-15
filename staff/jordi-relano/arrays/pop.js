delete Array.prototype.indexOf
function pop(array) {
    var lastIndex = array.length - 1 // declaramos variable auxiliar con el último elemento del array
    var lastElement = array[lastIndex] // declaramos una variable auxiliar dandole el valor de lastindex en el array
    if (array.length > 0) { // tenemos que decir que si hay un array vacío queremos que actue sobre un array que tenga por lo menos 1 elemento, si tiene menos pues que devuelva undefined, aunque ya de por si lo devuelve auto
        array.length = array.length - 1 // array.length-- (en JS podemos decir que la longitud del array es su misma longitud menos 1)
        return lastElement // ahora se aplicará la variable auxiliar con array.length = array.length - 1
        debugger

    } else { // este else no hace falta, porque las funciones por defecto devuelven undefined
        return undefined
    }
}




// CASE 1

var nums = [100, 200, 300, 400, 500]

var num = pop(nums)

console.log(num)
// 500
console.log(nums.length)
// 4
console.log(nums)
// [100, 200, 300, 400]

// CASE 2

var animals = ['pigs', 'goats', 'sheep', 'cows']

var animal = pop(animals)

console.log(animal)
// 'cows'
console.log(animals.length)
// 3
console.log(animals)
// ['pigs', 'goats', 'sheep']

// CASE 3

var sports = ['soccer', 'baseball']

var sport = pop(sports)

console.log(sport)
// 'baseball'
console.log(sports.length)
// 1
console.log(sports)
// ['soccer']

// CASE 4

var sports = []

var sport = pop(sports)

console.log(sport)
// undefined
console.log(sports.length)
// 0
console.log(sports)
// []
