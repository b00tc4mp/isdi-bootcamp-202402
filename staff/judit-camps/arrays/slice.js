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
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = slice(fruits, 1, 3);
console.log(citrus)
// citrus contains ['Orange','Lemon']


console.log('CASE 2')
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(slice(animals, 2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(slice(animals, 2, 4));
// Expected output: Array ["camel", "duck"]

console.log(slice(animals, 1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(slice(animals, -2));
// Expected output: Array ["duck", "elephant"]

console.log(slice(animals, 2, -1));
// Expected output: Array ["camel", "duck"]

console.log(slice(animals));
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


console.log('CASE 3')
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 33, // ignored by slice() since length is 3
};
console.log(slice(arrayLike, 1, 3));
// [ 3, 4 ]

console.log('CASE 4')
console.log(slice([1, 2, , 4, 5], 1, 4));
// [2, empty, 4]