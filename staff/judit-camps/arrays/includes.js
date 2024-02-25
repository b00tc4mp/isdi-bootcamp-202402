delete Array.prototype.includes

function includes(array, searchElement, fromIndex) {
    var included = false
    var targetIndex
    if (fromIndex >= array.length) {
        return false
    } else if (fromIndex < 0 && array.length + fromIndex < 0 || fromIndex === undefined) {
        targetIndex = 0
    } else if (fromIndex < 0 && array.length + fromIndex > 0) {
        targetIndex = array.length + fromIndex
    } else {
        targetIndex = fromIndex
    }
    for (var i = targetIndex; i < array.length; i++) {
        if (array[i] === searchElement) {
            included = true
        }
    }
    return included
}

function assertArrays(results, expected) {
    for (var i = 0; i < results.length; i++) {
        console.log('CASE ' + (i + 1))
        console.assert(results[i] === expected[i], expected[i])
    }
}

var results = []
var expected = []

// CASE 1
var array1 = [1, 2, 3];
results[results.length] = (includes(array1, 2));
expected[expected.length] = true


// CASE 2
var pets = ['cat', 'dog', 'bat'];
results[results.length] = (includes(pets, 'cat'));
expected[expected.length] = true

// CASE 3
results[results.length] = (includes(pets, 'at'));
expected[expected.length] = false


// CASE 4
var arr = ["a", "b", "c"];
results[results.length] = (includes(arr, "c", 3));
expected[expected.length] = false

// CASE 5
results[results.length] = (includes(arr, "c", 100));
expected[expected.length] = false


assertArrays(results, expected)
