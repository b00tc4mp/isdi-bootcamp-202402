/**
 * Extract manys elements that matches the condition from an iterable object.
 *
 * @param object - The iterable object to mutate. 
 * @param index - The index from which to extractMany a value.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */

const extractMany = (object, callback) => { 
    if (object instanceof Object === false) //verifica si no es un objeto 
        throw TypeError(object + ' is not an object') //da error

    const extracted = {length: 0} // es una variable vacía para almacenar los valores que cumplan la condición 

    for (let i = 0; i < object.length; i++) { //recorre el array object
        const element = object[i]

        if ((callback(element))) { //si coincide con la condición del callback --> user.age > 25
            extracted[extracted.length] = element //si cumple el elemento se añade a la variable extracted --> extracted[0] = 'Pepito'
            extracted.length++ // incrementa el length 

            for (let j = i; j < object.length - 1; j++) { //desplaza los elementos a la izquierda -- j=2; j=5-1(4);j++ -- -1 porque la posición es 1 menos que la length
                object[j] = object[j + 1] // object[2] = object[2 + 1] --> 'pepito' = 'campa' //se suma 1 porque se sustiyute al anterior la posición siguiente (+1)
            }

            object.length-- //ajusta la longitud del array original 


            delete object[object.length] //elimina el último elemento, está duplicado {0: {name: 'Wendy', age: 19}, 1: { name: 'Peter', age: 20 }, 2: {name: 'Campa', age: 30}, 3:{name: 'James', age: 40}, 4 : {name: 'James', age: 40} length: 3}

            i-- //decrementa el índice para asegurarse de que el próximo elemento sea evaluado correctamente después de realizar cambios en el array original.
        }
    }
    return extracted
}

console.log('CASE 1: extracts many users form users')

const users = {
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    2: { name: 'Pepito', age: 50 },
    3: { name: 'Campa', age: 30 },
    4: { name: 'James', age: 40 },
    length: 5
}

const extracted = extractMany(users, function (user) {
    return user.age > 25
})

console.log(extracted)
/*
{
    0: { name: 'Pepito', age: 50 },
    1: { name: 'Campa', age: 30 },
    2: { name: 'James', age: 40 },
    length: 3
}
*/

console.log(users)
/*
{
    0: { name: 'Wendy', age: 19 },
    1: { name: 'Peter', age: 20 },
    length: 2
}
*/

console.log('Case 2: fails on 1 as an object parameter')

try {
    extractMany(1)
} catch (error) {
    console.log(error)
    // TypeError: 1 is not an Object
}