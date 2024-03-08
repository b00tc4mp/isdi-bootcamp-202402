/**
 * Extracts an element that matches the condition from an iterable object.
 *
 * @param object - The iterable object to mutate. 
 * @param index - The index from which to extract a value.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */
function extract(object, callback) {
    if(object instanceof Object){ //si es un objeto 
    var extracted = {} // variable que guarda el objeto que coincide con la condición de callback
    
    for (var i = 0; i < object.length; i++) { //recorre el objeto
        if (callback(object[i], i, object)) { //callback(pepito, 2, object)
            extracted = object[i] // extracted = { name: 'Pepito', age: 50 }
            for (var j = i; j < object.length; j++) { // recorre desde el i de pepito el resto del objeto 
                object[j] = object[j + 1] //object[2] = object[3] --> copia en la posición de 'Pepito' el siguiente índice. 
            }
            object.length-- //resta una a la longitud 
            delete object[object.length] //elimina el último objeto 
        }
    }
    return extracted //devuelve el objeto extraído
    } else{
        throw TypeError (object + ' is not an object') // si no error
    }
}

console.log('CASE 1: extract user pepito form users')

var users = {
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    2: { name: 'Pepito', age: 50 },
    3: { name: 'Campa', age: 30 },
    4: { name: 'James', age: 40 },
    length: 5
}

var user = extract(users, function (user) {
    return user.name === 'Pepito'
})


console.assert(user.name === 'Pepito' && user.age === 50, 'Extracted Pepito')
console.assert(users.length === 4, 4)
console.assert(users[0].name === 'Wendy' && users[1].name === 'Peter' && users[2].name === 'Campa' && users[3].name === 'James', 'users')


console.log('CASE 2: number is not an object')

console.assert(
    function(){
        try {
            extract(5)
            return false
        } catch (error) {
            console.log(error)
            return true
        }
    }(),
    'Adding a number should throw an error'
)
