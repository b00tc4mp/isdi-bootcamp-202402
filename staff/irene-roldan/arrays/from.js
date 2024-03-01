delete Array.prototype.from

function from(arrayLike, formula) {
    var newArray = []
    if (formula == undefined) {
        for (var el = 0; el < arrayLike.length; el++) {
            newArray[newArray.length] = arrayLike[el]
        }
    } else {
        for (var el = 0; el < arrayLike.length; el++) {
            newArray[newArray.length] = formula(arrayLike[el])
        }
    }
    return newArray
}


var expected = []
var results = []

function assertArrays(results, expected) {
    for (var i = 0; i < results.length; i++) {
        console.assert(results[i] === expected[i], expected[i])
    }
}

console.log('CASE 1')
results = (from('foo'));
expected = ["f", "o", "o"]
assertArrays(results, expected)


console.log('CASE 2')
results = (from([1, 2, 3], function (x) { return x + x }));
expected = [2, 4, 6]
assertArrays(results, expected)
