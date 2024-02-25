delete String.prototype.repeat

function repeat(string, count) {
    debugger
    if (count == Infinity) throw 'Range error'
    var result = ''
    for (var i = 0; i < count; i++) {
        result = result + string;
    }
    return result
}

// CASE 1

var s = 'happy! '

var result = repeat(s, 3)

console.log(result)
// 'happy! happy! happy!'