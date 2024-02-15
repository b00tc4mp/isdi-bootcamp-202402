delete String.prototype.at

function at(string, index) {
    debugger
    if (index >= 0)
        return string[index];
    else {
        return string[string.length + index]
    }
}

// CASE 1

var s = 'hola mundo'

var char = at(s, 6)
// 'u'

// CASE 2

var s = 'hola mundo'

var char = at(s, 20)
// undefined

// CASE 3

var s = 'hola mundo'

var char = at(s, -3)
console.log(char)
// 'u'