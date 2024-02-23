
function at(string, index){
    
    if (index >= 0)
        return string[index]
    else if (index < 0)
        return string[(string.length) + index]
    else {
        return undefined
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

var char = at(s, -4)
// 'u'