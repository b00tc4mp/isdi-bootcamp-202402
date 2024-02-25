delete String.prototype.concat

function concat(...strings) {
    var finalString = ''
    debugger
    for (var arg = 0; arg < strings.length; arg++) {
        var string = strings[arg]
        if (string === '[]') {
            finalString += '';
        } else if (string === '{}') {
            finalString += '[object Object]'
        } else finalString += string
    }
    return finalString
}


var results = []
var expected = []
// CASE 1
var s = 'hello'
var con = concat(s, ' ', 'world')
results[results.length] = con
expected[expected.length] = 'hello world'


// CASE 2
var n = 4
var con = concat(n, 5)
results[results.length] = con
expected[expected.length] = '45'


function assertResultsStrings(results, expected) {
    for (var i = 0; i < results.length; i++) {
        console.log('CASE ' + (i + 1))
        console.assert(results[i] === expected[i], expected[i])
    }
}

assertResultsStrings(results, expected)