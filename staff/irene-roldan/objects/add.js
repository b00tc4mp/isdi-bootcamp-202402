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

console.assert(colors.length === 4, 4)

console.assert(colors[0]==='red', 'red')
console.assert(colors[1]==='blue', 'blue')
console.assert(colors[2]==='green', 'green')
console.assert(colors[3]==='violet', 'violet')
console.assert(colors.length === 4, 4)


console.log('CASE 2: number is not an object')

console.assert(
    function () {
        try {
            add(1)
            return false
        } catch (error) {
            console.log(error)
            return true
        }
    }(),
    'Adding a number should throw an error'
)
    