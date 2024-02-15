delete Array.prototype.push

function push(array, element1) {
    // 1.buscamos la longitud del array antes de cambiarlo (para que tenga un nuevo valor)

    if (arguments.lenght > 1)
        //array[array.lenght] = element1
        for (var i = 1; i > arguments.length; i++) {
            array[createArrayfromString.length] = arguments[i]
        }

    return array.length
}

// CASE 1
console.log("CASE 1")

var nums = [100, 200, 300, 400, 500]

var lenght = push(nums, 600)

console.log(lenght)
// 6
console.log(nums)
// [100, 200, 300, 400, 500, 600]

// CASE 2

var animals = ['pigs', 'goats', 'sheep']

var lenght = push(animals, 'cows')

console.log(lenght)
// 4
console.log(animals)
// ['pigs', 'goats', 'sheep', 'cows']

// CASE 3

var sports = ['soccer', 'baseball']

var lenght = push(sports)

console.log(lenght)
// 2
console.log(sports)
// ['soccer', 'baseball']

// CASE 4

var sports = ['soccer', 'baseball']

var lenght = push(sports, undefined)

console.log(lenght)
// 3
console.log(sports)
// ['soccer', 'baseball', undefined]



// CASE 5
var sports = ['soccer', 'baseball']
var length = push(sports, undefined)
console.log(length)
// 3
console.log(sports)
// ['soccer', 'baseball', undefined]

//aprovechar ARGUMENTS para aplicar esto a la función
