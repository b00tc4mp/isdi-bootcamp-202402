// El reduce()método de Arrayinstancias ejecuta una función de devolución de llamada "reductora" proporcionada por el usuario en cada elemento de la matriz, en orden, pasando el valor de retorno del cálculo en el elemento anterior. El resultado final de ejecutar el reductor en todos los elementos de la matriz es un valor único.

// La primera vez que se ejecuta la devolución de llamada no hay "valor de retorno del cálculo anterior". Si se proporciona, se puede utilizar un valor inicial en su lugar. De lo contrario, el elemento de la matriz en el índice 0 se utiliza como valor inicial y la iteración comienza desde el siguiente elemento (índice 1 en lugar de índice 0).

delete Array.prototype.reduce

function reduce(array, callback, accum){

for (var i = 0; i < array.length; i++){
    accum = callback(accum, array[i]);
}


return accum

}




console.log('CASE 1')
var array = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
var initialValue = 0;
var sumWithInitial = reduce(array, function (accumulator, currentValue) {
    return accumulator + currentValue
}, initialValue)
//console.log(sumWithInitial);
// Expected output: 10
console.assert (sumWithInitial === 10, '10')


console.log('CASE 2')
var cart = [
    { what: 'socks', price: 14.95, qty: 2, brand: 'adidas' },
    { what: 't-shirt', price: 24.85, qty: 3, brand: 'levis' },
    { what: 'shorts', price: 20.15, qty: 4, brand: 'hilfigher' },
    { what: 'bag', price: 200.05, qty: 1, brand: 'dolce gabbana' }
]

var totalCost = reduce(cart, function (amount, item) {
    return amount + item.price * item.qty
}, 0)

//console.log(totalCost)

console.assert (totalCost === 385.1, '385.1')