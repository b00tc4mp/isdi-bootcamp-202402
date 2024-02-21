/**
 * Adds an element in an iterable object.
 *
 * @param object - The iterable object to mutate. 
 * @param value - The value to add.
 * 
 * @throws {TypeError} When object is not an object.
 */

function add (object, value){
    if (arguments.length === 1)
        return object.length
    else if ((object instanceof Object) === false)
        throw new TypeError(object + ' is not an Object')
    else {
        object[object.length] = value
        object.length++
        return object.length
    }
    
}

console.log('CASE 1')

let colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
let result = add(colors, 'yellow')
console.log(result)
//4
console.log(colors)
/*{
    0: 'red',
    1: 'blue',
    2: 'green',
    3: 'yellow',
    length: 4
}*/

console.log('CASE 2')
colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
} 
result = add(colors)
console.log(result)
//3
console.log(colors)
/*{
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}*/

console.log('CASE 3')
let str = "I'm not an object"
try{
    result = add(str, 'yellow')
} catch (error) {
    console.log(error)
    //TypeError: "I'm not an object" is not an Object"
}

console.log('CASE 4')
try{
    result = add()
} catch (error) {
    console.log(error)
    //TypeError: undefined is not an Object"
}