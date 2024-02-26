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

console.log('CASE 2: insert 300, at index 2')

var nums = {
    0: 100,
    1: 200,
    2: 400,
    3: 500,
    4: 600,
    5: 700,
    length: 6
}

var length = insert(nums, 2, 300)

console.log(length)
// 7

console.log(nums)
/*
{
    0: 100,
    1: 200,
    2: 300,
    3: 400,
    4: 500,
    5: 600,
    6: 700
    length: 7
}
*/

console.log('CASE 3: fails on undefind object parameter')

try {
    insert()
} catch (error) {
    console.log(error)
    // TypeError: undefined is not an Object
}

console.log('CASE 4: fails on 1 as an object parameter')

try {
    insert(1)
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
    insert(colors)
} catch (error) {
    console.log(error)
    // TypeError: undefined is not a Number
}