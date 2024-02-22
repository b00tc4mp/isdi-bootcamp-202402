/**
 * Adds an element in an iterable object. 
 * @param object - the iterable object to mutate 
 * @param value -  the value to add
 * @throws {TypeError} - when object is not an object
 */

function add(object, value) {
    
    object[object.length] = value
    object.length++
    return object.length

    
}

console.log('Case 1')
var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
var length = add(colors, 5)
console.log(length)
//4

console.log('Case 3')
var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
var length = add(colors, 23)
console.log(length)


