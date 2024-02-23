/**
 * Removes an element in iterable object at specfified index.
 *
 * @param object - The iterable object to mutate. 
 * @param index - The index from which to remove a value.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */

function remove(object, index) {
    
    if (object instanceof Object === false) { //si index no es objeto 
        throw new TypeError (object + ' is not an Object')

    }else if(typeof index !== 'number') { //si index no es número )
        throw new TypeError (index + ' is not a Number')
    
    }else { 
            var removedObject = object[index] // 'blue'

            for (var i = index; i < object.length; i++) { //i = index (1) índice donde empieza a recorrer
                object[i] = object[i + 1] // i = 1 --> 'blue' // object[i (1) + index (1)] --> 'green' 
            }    
                
            delete object[object.length - 1] //elimina la última posición del objeto
            object.length--  // elimina uno la largada del objeto

            return removedObject 
    }
}


console.log('CASE 1: remove blue from index 1')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var removed = remove(colors, 1)

console.log(removed)
// 'blue'

console.log(colors)
/*
{
    0: 'red',
    1: 'green',
    length: 2
}
*/

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