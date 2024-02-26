delete Array.prototype.slice

function slice(arr, start, end) {
    var result = []
    if (start < 0) {
        start = arr.length + start
    }
    if (end < 0) {
        end = arr.length + end
    }
    if (start == undefined) {
        start = 0
    }
    if (end == undefined) {
        end = arr.length
    }

    if (start >= arr.length || end <= start) {
        return undefined
    } else {
        for (var i = start; i < end; i++) {
            if (arr[i] != ' ') {
                result[result.length] = arr[i]
            } else result[result.length] = ''
        }
    }


    return result
}

console.log('CASE 1')
var fruits = ["banana", "orange", "lemon", "apple", "mango"];
var citrus = slice(fruits, 1, 3);
//console.log(citrus)
// citrus contains ['orange','lemon']

console.assert(citrus[0] === 'orange')
console.assert(citrus[1] === 'lemon')



console.log('CASE 2')
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
var result = slice(animals, 2);
//console.log(result)
// Expected output: Array ["camel", "duck", "elephant"]

console.assert(result[0] === 'camel')
console.assert(result[1] === 'duck')
console.assert(result[2] === 'elephant')


var result = slice(animals, 2, 4);
//console.log(result)
// Expected output: Array ["camel", "duck"]

console.assert(result[0] === 'camel')
console.assert(result[1] === 'duck')

var result = slice(animals, 1, 5);
//console.log(result)
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.assert(result[0] === 'bison')
console.assert(result[1] === 'camel')
console.assert(result[2] === 'duck')
console.assert(result[3] === 'elephant')

var result = slice(animals, -2);
//console.log(result)
// Expected output: Array ["duck", "elephant"]

console.assert(result[0] === 'duck')
console.assert(result[1] === 'elephant')

var result = slice(animals, 2, -1);
//console.log(result)
// Expected output: Array ["camel", "duck"]

console.assert(result[0] === 'camel')
console.assert(result[1] === 'duck')