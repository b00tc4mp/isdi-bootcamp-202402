var assert = require('./assert')

/**
 * Inserts an element in iterable object at specfified index.
 *
 * @param object - The iterable object to mutate. 
 * @param index - The index from which to insert the given values.
 * @param value - The value to insert.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */
function insert(object, index, value) {
    if (!(object instanceof Object)) throw new TypeError(object + ' is not an Object')
    if (typeof index !== 'number') throw new TypeError(index + ' is not a Number')

    for (var i = object.length; i > index; i--)
        object[i] = object[i - 1]

    object[index] = value

    object.length++

    return object.length
}


console.log('CASE 1: insert skyblue in index 1')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
var length = insert(colors, 1, 'skyblue')

console.log(length)
// 4
console.log(colors)
/*
{
    0: 'red',
    1: 'skyblue',
    2: 'blue',
    3: 'green',
    length: 4
}
*/

/*
console.assert(colors[0] === 'red', 'red')
console.assert(colors[1] === 'skyblue', 'skyblue' )
console.assert(colors[2] === 'blue', 'blue')
console.assert(colors[3] === 'green', 'green')

console.assert(length === 4)
*/

assert.equalsValue(length, 4)
assert.hasValues(colors, 'red', 'skyblue', 'blue', 'green')