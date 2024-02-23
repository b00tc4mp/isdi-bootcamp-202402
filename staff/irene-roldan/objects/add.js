/**
 * Adds an element in an iterable object. 
 * @param object - the iterable object to mutate 
 * @param value -  the value to add
 * @throws {TypeError} - when object is not an object
 */

function add(object, value) {

    if(object instanceof Object === true){ //si es un objeto
        object[object.length] = value // copia el valor al objeto  
        object.length++ //se suma uno a la largada del objeto
        
        return object.length //devuelve la largada del objeto
    
    } else { // si no da error
        throw new TypeError (object + ' is not an Object')
    }
}

console.log('CASE 1: add violet in colors')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = add(colors, 'violet')

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

console.log('Case 2: number is not an object')

try {
    add(1)
} catch (error) {
    console.log(error)
    // TypeError: 1 is not an Object
}