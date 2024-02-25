delete String.prototype.startsWith

function startsWith(string, searchString) {
    var len = searchString.length
    var word = ''
    for (var i = 0; i < len; i++) {
        word += string[i];
    }
    if (word === searchString) return true
    return false
}


var results = []
var expected = []


// CASE 1
var s = 'hola mundo'
results[results.length] = startsWith(s, 'hol')
expected[expected.length] = true


// CASE 2
var s = 'hola mundo'
results[results.length] = startsWith(s, 'holo')
expected[expected.length] = false


function assertResultsStrings(results, expected) {
    for (var i = 0; i < results.length; i++) {
        console.log('CASE ' + (i + 1))
        console.assert(results[i] === expected[i], expected[i])
    }
}

assertResultsStrings(results, expected)