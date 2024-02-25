/**
 * Extracts an element that matches the condition from an iterable object.
 *
 * @param object - The iterable object to mutate. 
 * @param value- The value to search index.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */

const indexOf = (object, value) => {
    if(object instanceof Object){
        for (let i = 0; i < object.length; i++) {
            let element = object[i]

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

const colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

const index = indexOf(colors, 'blue')

console.log(index)
// 1

console.log(colors)
/*
{
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
*/

console.log('CASE 2: error is not an object')

try {
    indexOf()
} catch (error) {
    console.log(error)
    // TypeError: undefined is not an Object
}


console.log('CASE 3: index not found')

const colors2 = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

const index2 = indexOf(colors2, 'violet')

console.log(index2)
// -1
