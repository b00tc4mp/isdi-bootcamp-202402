delete Array.prototype.reduce

function reduce(array, callback, accum) {
    if (arguments === 3) {
        var i = 0
    } else {
        accum = array[0]
        var i = 1
    }

    for (; i < array.length; i++) {
        accum = callback(accum, array[i], array)
    }
    return accum
}


console.log('CASE 1')
var array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
var initialValue = 0;
var sumWithInitial = reduce(array, function (accumulator, currentValue) {
    return accumulator + currentValue
}, initialValue)
console.log(sumWithInitial);
// Expected output: 10


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

console.log(totalCost)