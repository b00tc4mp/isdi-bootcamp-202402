var assert = require('./assert')

/**
 * Adds an element in an iterable object.
 *
 * @param object - The iterable object to mutate. 
 * @param value - The value to add.
 * 
 * @throws {TypeError} When object is not an object.
 */
function add(object, value) {
    object[object.length] = value

    object.length++

    return object.length
}

console.log('CASE 1: add violet in colors')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = add(colors, 'violet')

assert.equalsValue(length, 4)
assert.hasValues(colors, 'red', 'blue', 'green', 'violet')