/**
 * Adds an element in an iterable object. 
 * @param object - the iterable object to mutate 
 * @param value -  the value to add
 * @throws {TypeError} - when object is not an object
 */

const add = (object, value) => {
    if (typeof object === 'object' && object !== null) {
        object[object.length] = value
        object.length++

        return object.length
    } else {
        throw new TypeError(`${object} is not an Object`);
    }
}

console.log('CASE 1: add violet in colors')

const colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

const length = add(colors, 'violet')

console.log(length)
// 4

console.log(colors)
/*
{
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'violet',
    length: 4
}
*/

console.log('CASE 2: number is not an object')

try {
    add(1)
} catch (error) {
    console.log(error)
    // TypeError: 1 is not an Object
}