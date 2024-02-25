delete Array.prototype.reduce

function reduceArray(array, callback, init){
    if (arguments.length > 2){
        var acumulator = init;
        for (let i = 0; i < array.length; i++){
            acumulator = callback(acumulator, array[i])
        }
        return acumulator
    } else {
        var acumulator = array[0]
        for (let i = 1; i < array.length; i++){
            acumulator = callback(acumulator, array[i])
        }
        return acumulator
    }
}



console.log('CASE 1')

var cart = [
    { what: 'socks', price: 14.95, qty: 2, brand: 'adidas' },
    { what: 't-shirt', price: 24.85, qty: 3, brand: 'levis' },
    { what: 'shorts', price: 20.15, qty: 4, brand: 'hilfigher' },
    { what: 'bag', price: 200.05, qty: 1, brand: 'dolce gabbana' }
]

var total = reduceArray(cart, function (amount, item) {
    //return amount + item['price'] * item['qty']
    return amount + item.price * item.qty
}, 0)


//console.log(total)
// 385.1

console.assert(total === 385.1, 'sum 385.1')


console.log('CASE 2')

var cart = [
    { what: 'socks', price: 14.95, qty: 2, brand: 'adidas' },
    { what: 't-shirt', price: 24.85, qty: 3, brand: 'levis' },
    { what: 'shorts', price: 20.15, qty: 4, brand: 'hilfigher' },
    { what: 'bag', price: 200.05, qty: 1, brand: 'dolce gabbana' }
]


var itemsQty = reduceArray(cart, function (totalQty, item) {
    return totalQty + item.qty
}, 0)

var average = reduceArray(cart, function (amount, item, index, cart) {
    return amount + item.price * item.qty / itemsQty
}, 0)

//(14.95 * 2 + 24.85 * 3 + 20.15 * 4 + 200.05 * 1) / (2 + 3 + 4 + 1)

//console.log(average)
// 38.510000000000005

console.assert(average === 38.510000000000005, 'average result')

console.log('CASE 3')

var nums = [10, 20, 30, 40, 50, 60, 70]

var total = reduceArray(nums, function (sum, num) {
    return sum + num
})

//console.log(total)
//280


console.assert(total === 280, 'total result')


console.log('CASE 4')

var nums = [10, 20, 30, 40, 50, 60, 70]

var total = reduceArray(nums, function (sum, num) {
    return sum + num
}, 1)

//console.log(total)
//281


console.assert(total === 281, 'total result')
