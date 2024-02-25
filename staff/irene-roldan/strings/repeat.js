delete String.prototype.repeat

function repeat(string, count) {
    var element = ""
    
    for (var i = 0; i < count; i++) {
        element = element + string
    }
    return element
}

console.log('Case 1')
var s = 'happy!'
var result = repeat(s, 3)

console.assert(result === 'happy!happy!happy!', 'the result should be happy!happy!happy!')