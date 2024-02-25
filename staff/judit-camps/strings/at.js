delete String.prototype.at


function at(string, index) {
    if (index >= 0)
        return string[index];
    else {
        return string[string.length + index]
    }
}

var results = []
var expected = []

// 'CASE 1: get the value at position 6 -> u'
var s = 'hola mundo'
var char = at(s, 6)
results[results.length] = char
expected[expected.length] = 'u'


// CASE 2
var s = 'hola mundo'
var char = at(s, 20)
results[results.length] = char
expected[expected.length] = undefined


// CASE 3
var s = 'hola mundo'
var char = at(s, -3)
results[results.length] = char
expected[expected.length] = 'n'


function assertResultsStrings(results, expected) {
    for (var i = 0; i < results.length; i++) {
        console.log('CASE ' + (i + 1))
        console.assert(results[i] === expected[i], expected[i])
    }
}

assertResultsStrings(results, expected)