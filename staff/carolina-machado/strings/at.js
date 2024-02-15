delete String.prototype.at

function at(string, index) {
var character

    if (index >= 0) {

        character = string[index]

    } else {

        character = string[string.length + index]
    }
    return character
}

// CASE 1

var s = 'hola mundo'

var char =  at(s, 6)
//console.log(char)
// 'u'

// CASE 2

//var s = 'hola mundo'

//var char = at(s, 20)
undefined

// CASE 3

//var s = 'hola mundo'

//var char = at(s, -4)

console.log(char)
// 'u'