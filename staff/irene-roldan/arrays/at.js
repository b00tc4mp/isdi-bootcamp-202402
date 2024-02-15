delete Array.prototype.at;

function at(array, index) {
    //devolver el índice de la array mediante un array que contenga entre corchetes el indice.
    //Si el índice es negativo compensar el nevativo con un + índice. Con un if poner la condición. 
    if (index < 0) {
        return array[array.length + index]
    }else{
        return array[index]
    }
    
}

// CASE 1

var nums = [100, 200, 300, 400, 500];
var num = at(nums, 3);
console.log(num);
//400


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