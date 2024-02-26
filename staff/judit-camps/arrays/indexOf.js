delete Array.prototype.indexOf

function indexOf(array, searchElement, indexFrom) {
    if (indexFrom >= array.length) {
        return -1
    } else if (indexFrom < 0 && array.length + indexFrom < 0 || indexFrom === undefined) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === searchElement) {
                return i
            }
        }
    } else if (indexFrom < 0 && array.length + indexFrom > 0) {
        for (var i = array.length + indexFrom; i < array.length; i++) {
            if (array[i] === searchElement) {
                return i
            }
        }
    } else {
        for (var i = indexFrom; i < array.length; i++) {
            if (array[i] === searchElement) {
                return i
            }
        }
    }
    return -1
}


var expected = []
var results = []

var array = [2, 9, 9];
// CASE 1
results[results.length] = (indexOf(array, 2));
expected[expected.length] = 0

// CASE 2
results[results.length] = (indexOf(array, 7));
expected[expected.length] = -1

// CASE 3
results[results.length] = (indexOf(array, 9, 2));
expected[expected.length] = 2

// CASE 4
results[results.length] = (indexOf(array, 2, -1));
expected[expected.length] = -1

// CASE 5
results[results.length] = (indexOf(array, 2, -3));
expected[expected.length] = 0

function assertArrays(results, expected) {
    for (var i = 0; i < results.length; i++) {
        console.log('CASE ' + (i + 1))
        console.assert(results[i] === expected[i], expected[i])
    }
}

assertArrays(results, expected)