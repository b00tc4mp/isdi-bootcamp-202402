/**
 * Inserts elements in iterable object at specfified index.
 *
 * @param object - The iterable object to mutate. 
 * @param index - The index from which to insert the given values.
 * @param value - The value to insert.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */

function insertMany(object, index, value) {
    
    if(!(object instanceof Object)){
        throw new TypeError(object + ' is not an Object')
    } else if (typeof index !== 'number') {
        throw new TypeError(index + ' is not a Number')
    }

    var newLength = object.length + (arguments.length - 2) //variable que declara una nueva longitud. suma la longitud original del objeto con la cantidad de valores que se van a insertar (se resta 2 para excluir objeto e índice) newLenght = 3 + (5 - 2) = 6

    for (var i = newLength - 1; i >= index + (arguments.length - 2); i--) { //desplaza los elementos a la derecha para hacer espacio a los nuevos valores. Se desplazará la cantidad de valores. - 1 porque la posición es 5 y la largada es 6. 
        object[i] = object[i - (arguments.length - 2)] // object[5] = object [5 - 3] --> object[5] = object[2] 'green' --- object = {0:'red', 1:'blue', 2:'green', 5: 'green', length:3}
    }

    for (var i = index, j = 2; j < arguments.length; i++, j++) { //añade los valores en las posiciones correspondientes. j=2 porque itera en los valores a partir de la posición 2. i=index porque es a partir de ese valor que añade. 
        object[i] = arguments[j]; // object[2] = arguments[2] --> 'green' = 'skyblue'
    }

    object.length = newLength //la longitud del valor se reemplaza por la longitud con los valores insertados --> 3 = 6

    return object.length // devuelve la longitud del objeto --> 6
}

console.log('CASE 1: insert skyblue in index 1')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = insertMany(colors, 1, 'skyblue')

console.assert(colors.length === 4, 'colors.length should be 4')
console.assert(colors[0] === 'red' && colors[1] === 'skyblue' && colors[2] === 'blue' && colors[3] === 'green', 'colors')
console.assert(colors.length === 4, 'colors.length should be 4')

console.log('CASE 2: insert skyblue, gold and plum in index 2')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = insertMany(colors, 2, 'skyblue', 'gold', 'plum')

console.assert(colors.length === 6, 'colors.length should be 6')

console.assert(colors[0] === 'red' && colors[1] === 'blue' && colors[2] === 'skyblue' && colors[3] === 'gold' && colors[4] === 'plum' && colors[5] === 'green', 'colors')
console.assert(colors.length === 6, 'colors.length should be 6')

console.log('CASE 3: fails on undefind object parameter')

console.assert(
    function(){

        try {
            insertMany()
            return false
        } catch (error) {
            console.log(error)
            return true
        }
    }(),
    'CASE 3: fails on undefind object parameter'
)

console.log('CASE 4: fails on 1 as an object parameter')

console.assert(
    function(){
        try {
            insertMany(1)
            return false
        } catch (error) {
            console.log(error)
            return true
        }
    }(),
    'CASE 4: fails on 1 as an object parameter'
)

console.log('CASE 5: fails on undefined as index parameter')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

console.assert(
    function(){
        try {
            insertMany(colors)
            return false
        } catch (error) {
            console.log(error)
            return true
        }
    }(),
    'CASE 5: fails on undefined as index parameter'
)