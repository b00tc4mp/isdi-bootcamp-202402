delete String.prototype.concat

function concat(element1, element2, separator){ //SI SOLO CONCADENA DOS ELEMENTOS
    var result = element1 + separator + element2

    return result
}


function concat(elements, separator){
    var result = elements[0] //se iniciliza con el primer elemento 

    for (let i = 1; i < elements.length; i++) { //empieza a contar desde el segundo elemento elements[1] = 'How'
        result += separator + elements[i] // world = world + ' ' + How 
    }
    return result
}

console.log('CASE 1')

var str1 = 'Hello'
var str2 = 'World'

var char = concat([str1, str2], ' ')

console.assert(char === 'Hello World', ' Expected Hello World')

console.log('CASE 2')

var str1 = 'World'
var str2 = 'How'
var str3 = 'are'
var str4 = 'you'

var char = concat([str1, str2, str3, str4], ' ')
console.assert(char === 'World How are you', 'Expected "World How are you"')