delete String.prototype.trim

function trim(string) {
    var reversedString = ''
    var wordStarted = false
    var finalString = ''

    for (var i = string.length - 1; i > 0; i--) {
        if (string[i] === '\n' || string[i] === '\s' || string[i] === '\r' || string[i] === ' ') {
            if (wordStarted) reversedString += string[i];
        } else {
            wordStarted = true
            reversedString += string[i];
        }
    }
    wordStarted = false;

    for (var i = reversedString.length - 1; i > -1; i--) {
        if (reversedString[i] === '\n' || reversedString[i] === '\s' || reversedString[i] === '\r' || reversedString[i] === ' ') {
            if (wordStarted) finalString += reversedString[i];
        } else {
            wordStarted = true
            finalString += reversedString[i];
        }
    }

    return finalString

}


var results = []
var expected = []

// CASE 1
var s = '  hola mundo   '
results[results.length] = trim(s)
expected[expected.length] = 'hola mundo'


// CASE 2
var s = ' \n\s\r hola mundo \n\s\r '
results[results.length] = trim(s)
expected[expected.length] = 'hola mundo'


function assertResultsStrings(results, expected) {
    for (var i = 0; i < results.length; i++) {
        console.log('CASE ' + (i + 1))
        console.assert(results[i] === expected[i], expected[i])
    }
}

assertResultsStrings(results, expected)