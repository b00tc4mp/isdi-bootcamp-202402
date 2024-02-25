delete String.prototype.at

function at(string, index) {
    if (index < 0) { //para índices negativos
        return string[string.length + index] //string[10 + -4] = string[10-4] = string[6] = 'u'
    }
    return string[index] //para índices positivos devuelve string[6] = 'u'
}

console.log('CASE 1')
var s = 'hola mundo'
var char = at(s, 6)
console.assert(char === 'u', 'char should return u')

console.log('CASE 2')
var s = 'hola mundo'
var char = at(s, 20)

console.assert(char === undefined, 'char should return undefined')

console.log('CASE 3')
var s = 'hola mundo'
var char = at(s, -4)
console.assert(char === 'u', 'char should return u')
