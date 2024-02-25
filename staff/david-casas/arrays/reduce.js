delete Array.prototype.reduce

function reduce(array, callback, accum) {
  var i = 0;

  if (arguments.length === 2) {
    accum = array[0];

    i = 1;
  }

  for (; i < array.length; i++) {
    var elem = array[i]

    accum = callback(accum, elem)
  }

  return accum
}

console.log("CASE 1");

var cart = [
  { what: "socks", price: 14.95, qty: 2, brand: "adidas" },
  { what: "t-shirt", price: 24.85, qty: 3, brand: "levis" },
  { what: "shorts", price: 20.15, qty: 4, brand: "hilfigher" },
  { what: "bag", price: 200.05, qty: 1, brand: "dolce gabbana" },
]

var total = reduce(
  cart,
  function (amount, item) {
    //return amount + item['price'] * item['qty']
    return amount + item.price * item.qty
  },
  0
)

console.assert(total === 385.10, '385.10')

console.log("CASE 2")

var cart = [
  { what: "socks", price: 14.95, qty: 2, brand: "adidas" },
  { what: "t-shirt", price: 24.85, qty: 3, brand: "levis" },
  { what: "shorts", price: 20.15, qty: 4, brand: "hilfigher" },
  { what: "bag", price: 200.05, qty: 1, brand: "dolce gabbana" },
]

var itemsQty = reduce(
  cart,
  function (totalQty, item) {
    return totalQty + item.qty
  },
  0
)

var average = reduce(
  cart,
  function (amount, item, index, cart) {
    return amount + (item.price * item.qty) / itemsQty
  },
  0
)

console.assert(average === 38.510000000000005, '38.510000000000005')
// 38.510000000000005

console.log("CASE 3")

var nums = [10, 20, 30, 40, 50, 60, 70]

var total = reduce(nums, function (sum, num) {
  return sum + num
})

console.assert(total === 280, '280')

console.log("CASE 4")

var nums = [10, 20, 30, 40, 50, 60, 70]

var total = reduce(
  nums,
  function (sum, num) {
    return sum + num
  },
  1
)

console.assert(total === 281, '281')

