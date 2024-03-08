/**
 * Extracts an element that matches the condition from an iterable object.
 *
 * @param object - The iterable object to mutate. 
 * @param value- The value to search index.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */

function indexOf(object, value) {
    if(object instanceof Object){
        for (var i = 0; i < object.length; i++) {
            var element = object[i]

            if (element === value) {
                return i
            } 
        } 
        return -1
    } else {
        throw new TypeError (object + 'is not an object')
    }   
}

console.log('CASE 1: index of blue in colors')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var index = indexOf(colors, 'blue')

console.assert(index === 1, 'index should be 1')

console.assert(colors[0] === 'red' && colors[1] === 'blue' && colors[2] === 'green', 'colors')
console.assert(colors.length === 3, 'colors.length should be 3')


console.log('CASE 2: error is not an object')

console.assert(
    function(){
        try {
            indexOf()
            return false
        } catch (error) {
            console.log(error)
            return true
        }
    }(),
    'CASE 2: error is not an object'
)


console.log('CASE 3: index not found')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var index = indexOf(colors, 'violet')

console.assert(index === -1, 'index not found should be -1')
