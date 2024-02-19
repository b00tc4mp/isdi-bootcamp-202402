delete Array.prototype.push

// Vamos a iterar en TDD: son 3 partes: del rojo al verde, al refactor
// Esto quiere decir que no cumplimos los test (console.log), hasta que están bien (verde)
// refactor es que se pueda leer bien ( que mejore la leegibilidad del código, que se lea mejor)
// es importante que todo sea uniforme, que siempre hagas lo mismo y se pueda leer

//function push(param, ...num) {
//var char = "";
//
// los 3 puntos te mete todos los parametros que le envien a la función en un array
//var resultArray = [];

//var count = 0;
//for (let i = count; i < param.length; i++) {
//    char = values[i];
//   resultArray[resultArray.length] = char

// cada vez que itere iremos avanzando en las posiciones del array vacio, sumando valores
//    count++
//   char = ""
//}
//return resultArray
//debugger



//}

function push(array, element1) {
    if (arguments.length > 1);
    // arguments te sirve para llamar los argumentos en la consola, y te chiva los que has llamado desde fuera  a la función (por ejemplo)
    // arguments.length te da la cantidad de objetos que te ha enviado
    // lo bueno de arguments puedes usarlo dentro de funciones, que no influye en el resultado, te da información
    // usas el debugger y miras los argumentos con consola
    array[array.length] = element1
    return array.length
    // esto va a buscar la posición del array, que es 5 porque tiene 5 elementos, de 0 a 4 y el siguiente es 5.
    //y le damos el valor de element1 que es lo que queremos meter dentro
    // operadores igualdad === estrictamente igual en tanto númericamente como semanticamente || !== lo mismo
    // == no comprueba el tipo semantico
    // 1 === "1" no es igual estrictamente

    // conclusión, si arguments es mayor que 1 meteme un push, así que cuando llames valores fuera de la función, tendrás siempre 1 y después querrás meter como mínimo otro más, entonces te mete todo en el nuevo array.  

}
//array[3] = num

//Qué hace push? Añade un elemento al final del array, y retorna la longitud del nuevo array ( manipula el nuevo array)
// 

// CASE 1
var nums = [100, 200, 300, 400, 500]

var length = push(nums, 600)

console.log(length)
// 6
console.log(nums)
// [100, 200, 300, 400, 500, 600]


// CASE 2
var animals = ['pigs', 'goats', 'sheep'];

var count = push(animals, 'cows');

console.log(count);
// 4
console.log(animals);
// ["pigs", "goats", "sheep", "cows"]

// CASE 3
var sports = ['soccer', 'baseball']

var length = push(sports)

console.log(length)
// 2
console.log(sports)
// ['soccer', 'baseball']


// CASE 4
var sports = ['soccer', 'baseball']

var length = push(sports, undefined)

console.log(length)
// 3
console.log(sports)
// ['soccer', 'baseball', undefined]

//CASE 5

var a = [10, 20, 30];

var length = a.push[40, 50, 60];

console.log(length);
// 6
console.log(nums);
// [10,20,30,40,50,60]

//Para este caso usaremos más arguments: cambiaremos la función

// function push(array, element1) {
//     if (arguments.length > 1);
//     array[array.length] = element1
//     return array.length
// }
// //pasa a:
// function push(array, element1) {
//     if (arguments.length > 1);
//         for (var i = 1; i < arguments.length; i++)
//             array[array.length] = element1
//     return array.length
// } //comenzamos a iterar en la posición 1 de arguments