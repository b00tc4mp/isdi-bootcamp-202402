/**
 * Adds an element in an iterable object.
 *
 * @param object - The iterable object to mutate. 
 * @param value - The value searched.
 * 
 * @throws {TypeError} When object is not an object.
 * @throws {TypeError} When value isn't declared.
 */

function indexOf (object, value){
    if (arguments.length < 2){
        throw new TypeError('Parameter "value" is required')
    } else if (object instanceof Object === false){
        throw new TypeError(object + ' is not an Object')
    }

    else {
        for (let i = 0; i < object.length; i++){
            if (object[i] === value)
                return i
        }
        return -1
    }
}   

console.log('CASE 1')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
let result = indexOf(colors, 'blue')
console.log(result)
//1


console.log('CASE 2')
result = indexOf(colors, 'yellow')
console.log(result)
//-1


console.log('CASE 3')
let str = "I'm not an object"
try{
    result = indexOf(str, 'yellow')
} catch (error) {
    console.log(error)
    //TypeError: "I'm not an object" is not an Object"
}


console.log('CASE 4')
try{
    result = indexOf()
} catch (error) {
    console.log(error)
    //TypeError: Parameter "value" is required
}