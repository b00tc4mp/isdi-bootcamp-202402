delete String.prototype.repeat

function repeat(string, count) {
    var element = ""
    
    for (var i = 0; i < count; i++) {
        element = element + string
    }
    return element
}

var s = 'happy! ';

var result = repeat(s, 3);

console.log(result)