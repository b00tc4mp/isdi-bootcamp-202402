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

// CASE 1
var s = 'hello'
var con = concat(s, ' ', 'world')
console.log(con)
// hello world


// CASE 2
var n = 4
var con = concat(n, 5)
console.log(con)
// hello world
