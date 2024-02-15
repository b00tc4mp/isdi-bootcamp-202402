delete String.prototype.trim

function trim(string) {
    debugger
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

// CASE 1

var s = '  hola mundo   '

var result = trim(s)

console.log(result)
// 'hola mundo'

// CASE 2

var s = ' \n\s\r hola mundo \n\s\r '

var result = trim(s)

console.log(result)
// 'hola mundo'