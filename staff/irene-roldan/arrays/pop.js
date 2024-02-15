delete Array.prototype.pop();

function pop (array) {
    //para saber si el interior de la array está vacía dar valor en la largada del array un 0.
    if (array.length === 0) {

    }else{
        //si no está vacía entonces dar valor de array la largada de la array -1
        var value = array[array.length-1]
        //para restar de la array la última posición copiarle el valor de la largada del array la última posición (-1)
        array.length = array.length - 1;
        //devolver valor de variable auxiliar 'value'
        return value
    }
    
    
}

/* CASE 1

var nums = [100, 200, 300, 400, 500];
var num = pop(nums);

console.log(num)
// 500
console.log(nums.length)
// 4
console.log(nums)
// [100, 200, 300, 400]
*/

/*
CASE 2
var animals = ['pigs', 'goats', 'sheep', 'cows']

var animal = pop(animals)

console.log(animal)
// 'cows'
console.log(animals.length)
// 3
console.log(animals)
// ['pigs', 'goats', 'sheep']
*/

/*
CASE 3

var sports = ['soccer', 'baseball']

var sport = pop(sports)

console.log(sport)
// 'baseball'
console.log(sports.length)
// 1
console.log(sports)
// ['soccer']
*/

// CASE 4

var sports = []
var sport = pop(sports)

console.log(sport)
// undefined
console.log(sports.length)
// 0
console.log(sports)
// []