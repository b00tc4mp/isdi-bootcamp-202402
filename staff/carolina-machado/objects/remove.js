var assert = require('./assert')

/**
 * Removes an element in iterable object at specfified index.
 *
 * @param object - The iterable object to mutate. 
 * @param index - The index from which to remove a value.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */
function remove(object, index) {
    if (object instanceof Object === false)
        throw new TypeError(object + ' is not an Object')
    else if (typeof index !== 'number')
        throw new TypeError(index + ' is not an number')

    else {
        var removed = object[index]
        for (let i = index; i < object.length; i++){
            object[i] = object[i+1]
        }
        delete object[object.length - 1]
        object.length--  
        return removed
    }
}

console.log('CASE 1: remove blue from index 1')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var result = remove(colors, 1)

console.log(result)
// 'blue'

console.log(colors)
/*
{
    0: 'red',
    1: 'green',
    length: 2
}
*/


assert.hasValues(colors, 'red', 'green')


/*
console.log('CASE 2: remove red from index 0')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = remove(colors, 0)

console.log(length)
// 'red'

console.log(colors)
/*
{
    0: 'blue',
    1: 'green',
    length: 2
}
*/
/*
assert.hasValues(removed, 'red')
assert.hasValues(colors, 'blue', 'green')


console.log('CASE 3: fails on undefind object parameter')

try {
    remove()
} catch (error) {
    console.log(error)
    // TypeError: undefined is not an Object
}

console.log('CASE 4: fails on 1 as an object parameter')

try {
    remove(1)
} catch (error) {
    console.log(error)
    // TypeError: 1 is not an Object
}

console.log('CASE 5: fails on undefined as index parameter')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

try {
    remove(colors)
} catch (error) {
    console.log(error)
    // TypeError: undefined is not a Number
}
*/