function repeat(string, count) {
    // TODO implement me
    var result = ''
    for (var i = 0; i < count; i++) {
        result += string;
    }
    return result;
}


// CASE 1

var s = 'happy! '

var result = repeat(s, 3)

console.log(result)
// 'happy! happy! happy!'