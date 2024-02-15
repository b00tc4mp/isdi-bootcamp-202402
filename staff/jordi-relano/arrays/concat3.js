debugger

delete Array.prototype.concat

function concat(array, ...element) {
    // element será un array con arrays (array1, array2, array3), creandose un array; se podría haber hecho todo con con ...element juntando todos los arrays
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        newArray[i] = array[i]
        // aquí cargamos el primer array (porque se llama array; será el primero que queremos en el nuevo array concatenado)
    }

    for (var i = 0; i < element.length; i++) {
        // typeof es un operador para detectar tipos de elementos ( la naturaleza de un valor)
        // la posición i es 0, la posición 0 elements contiene el array (que es un objeto)
        // entonces con que ... elements compila arrays, va pasandolos e iterando ( arrays = objeto)
        if (typeof element[i] !== 'string' && typeof element[i] !== 'number' && typeof element[i] !== 'boolean') {
            // si esto no es un string, no es un numero y no es un boolean hazme un bucle; estamos buscando que detecte que es un array y no las demás posibilidades
            for (var j = 0; j < element[i].length; j++) {
                // tenemos bucle anidado para iterar desde la posición i
                newArray[newArray.length] = element[i][j]
            }
        } else {
            // sino meteme elementos en el array desde la posición que se encuentre 
            newArray[newArray.length] = element[i]
            //
        }
    }
    return newArray
}

//CASE 1

let arr1 = ['kill', 'me', 'please']
let arr2 = ['I', "can't", 'take', 'it', 'anymore']
let result = concat(arr1, arr2)
console.log(result)
//['kill', 'me', 'please','I',"can't", 'take', 'it', 'anymore']

//CASE 2

let arr3 = ['make', 'it', 'stop']
let result1 = concat(arr1, arr2, arr3)
console.log(result1)
//['kill', 'me', 'please', 'I', "can't", 'take', 'it', 'anymore', 'make', 'it', 'stop']

//CASE 3

let str = 'please'
let result2 = concat(arr1, arr2, arr3, str)
console.log(result2)
//['kill', 'me', 'please', 'I', "can't", 'take', 'it', 'anymore', 'make', 'it', 'stop, 'please']