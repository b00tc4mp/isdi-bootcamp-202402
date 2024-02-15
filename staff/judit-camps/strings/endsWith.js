delete String.prototype.endsWith

function endsWith(string, searchString) {
    var len = searchString.length;
    var piece = ''
    for (var i = string.length - len; i < string.length; i++) {
        piece = piece + string[i];
    }
    if (piece === searchString) return true
    return false
}

// CASE 1

var s = 'hola mundo'

var result = endsWith(s, 'ndo')

console.log(result)
// true

// CASE 2

var s = 'hola mundo'

var result = endsWith(s, 'dos')

console.log(result)
// false