delete String.prototype.repeat

function repeat(string, count) {
    let newStr = ''
    for (let i = 0; i < count; i++){
        newStr = newStr + string
    }
    return newStr
}

// CASE 1

var s = 'happy! '

var result = repeat(s, 3)

console.log(result)
// 'happy! happy! happy!'