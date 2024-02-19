delete Array.prototype.slice
debugger
function slice(array, indexStart, indexEnd) {
    arrayResult = [];
    debugger
    if (arguments.length < 2) {
        return array
    }
    if (arguments.length < 3) {
        if (indexStart > 0) {
            for (let i = indexStart; i < array.length; i++) {
                arrayResult[arrayResult.length] = array[i];
            }
        }
        else if (indexStart < 0) {
            for (let i = array.length + indexStart; i < array.length; i++) {
                debugger
                arrayResult[arrayResult.length] = array[i];
            }
        }

    } else if (indexEnd < 0) {
        for (let i = indexStart; i < array.length - 1; i++) {
            arrayResult[arrayResult.length] = array[i]

        }
    }

    if (indexStart > array.length) {
        debugger
        return arrayResult = []
    }
    else if (indexStart < 0) {
        for (let i = array.length - 1; i <= indexEnd; i--) {
            arrayResult[arrayResult.length] = array[i];
        }
    }
    for (let i = indexStart; i < indexEnd; i++) {
        arrayResult[arrayResult.length] = array[i];

    }
    return arrayResult
}



console.log("CASE 1");

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(slice(animals, 2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log("CASE 2")

const animals1 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
var indexStart = 3
var indexEnd = 4
var result = slice(animals1, indexStart, indexEnd);
console.log(result);
// expected output: animals = ['elephant']

console.log("CASE 3")

var animals2 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
var indexStart1 = 1
var indexEnd1 = 5
var result1 = slice(animals2, indexStart1, indexEnd1);
console.log(result1);
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log("CASE 4")

var animals3 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
var indexStart2 = 2
var indexEnd2 = -1
var result2 = slice(animals3, indexStart2, indexEnd2);
console.log(result2);
// Expected output: Array ["camel", "duck"]

console.log("CASE 5")

var animals4 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
var result3 = slice(animals4);
console.log(result3);
// Expected output: animals1 = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log("CASE 6")

var animals3 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
var indexStart3 = -2
var result4 = slice(animals3, indexStart3);
console.log(result4);
// Expected output: Array ["duck", "elephant"]
