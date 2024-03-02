delete Array.prototype.shift

function shift(array) {
    var first = array[0]

    // extraction indexes as reference
    //for (var i = 1; i < array.length; i++)
    //array[i - 1] = array[i]

    // machaking indexes as reference
    for (var i = 0; i < array.length - 1; i++)
        array[i] = array[i + 1]

    array.length--

    return first
}

// CASE 1

var nums = [10, 20, 30]


var firstElement = shift(nums)
// Array { 0: 10, 1: 20, 2: 30, length: 3 }
// Array { 0: 10, 1: 20, 2: 30, length: 3 } -> var first = 10
// Array { 0: 20, 1: 20, 2: 30, length: 3 }
// Array { 0: 20, 1: 30, 2: 30, length: 3 }
// Array { 0: 20, 1: 30, length: 2 } -> array.length--
// return first
// Array { 0: 20, 1: 30, length: 2 }

console.assert(nums[0] === 20 &&
    nums[1] === 30,)
// Expected output: Array [20, 30]

console.assert(firstElement=== 10,'Assertion failed: Unexpected firstElement result')
// Expected output: 10


// CASE 2

var animals = ['elephant', 'sheep', 'cow', 'dog']

var firstElement = shift(animals)
// Array { 0: elephant, 1: sheep, 2: cow, 3: dog, length: 4 }
// var first = array[0] // elephant
// array[0] = array[1] // Array { 0: sheep, 1: sheep, 2: cow, 3: dog, length: 4 }
// array[1] = array[2] // Array { 0: sheep, 1: cow, 2: cow, 3: dog, length: 4 }
// array[2] = array[3] // Array { 0: sheep, 1: cow, 2: dog, 3: dog, length: 4 }
// array.length-- // Array { 0: sheep, 1: cow, 2: dog, length: 3 }
// return first

console.assert(animals[0] === 'sheep', 'sheep')
console.assert(animals[1] === 'cow', 'cow')
console.assert(animals[2] === 'dog', 'dog')
// ['sheep', 'cow', 'dog']

console.assert(firstElement === 'elephant', 'elephant')
// 'elephant'


// CASE 3

var cocktails = ['margharita', 'sex on the beach', 'bloody mary', 'gintonic', 'mojito', 'daikiri']

var firstElement = shift(cocktails)
// array // Array { 0: 'margharita', 1: 'sex on the beach', 2: 'bloody mary', 3: 'gintonic', 4: 'mojito', 5: 'daikiri', length: 6 }
// var first = 'margharita'
// array[0] = array[1] // Array { 0: 'sex on the beach', 1: 'sex on the beach', 2: 'bloody mary', 3: 'gintonic', 4: 'mojito', 5: 'daikiri', length: 6 }
// array[1] = array[2] // Array { 0: 'sex on the beach', 1: 'bloody mary', 2: 'bloody mary', 3: 'gintonic', 4: 'mojito', 5: 'daikiri', length: 6 }
// array[2] = array[3] // Array { 0: 'sex on the beach', 1: 'bloody mary', 2: 'gintonic', 3: 'gintonic', 4: 'mojito', 5: 'daikiri', length: 6 }
// array[3] = array[4] // Array { 0: 'sex on the beach', 1: 'bloody mary', 2: 'gintonic', 3: 'mojito', 4: 'mojito', 5: 'daikiri', length: 6 }
// array[4] = array[5] // Array { 0: 'sex on the beach', 1: 'bloody mary', 2: 'gintonic', 3: 'mojito', 4: 'daikiri', 5: 'daikiri', length: 6 }
// array.length-- // Array { 0: 'sex on the beach', 1: 'bloody mary', 2: 'gintonic', 3: 'mojito', 4: 'daikiri', length: 5 }
// return first

console.assert(cocktails[0] === 'sex on the beach')
console.assert(cocktails[1] === 'bloody mary')
console.assert(cocktails[2] === 'gintonic')
console.assert(cocktails[3] === 'mojito')
console.assert(cocktails[4] === 'daikiri')
// ['sex on the beach', 'bloody mary', 'gintonic', 'mojito', 'daikiri']

console.assert(firstElement === 'margharita')
// 'margharita'


// CASE 4

var nums = [10, 20]


var firstElement = shift(nums)
// array // Array { 0: 10, 1: 20, length: 2 }
// var first = 10
// Array { 0: 20, 1: 20, length: 2 }
// array.length-- // Array {  0: 20, length: 1 }
// return first

console.log(nums)
// [20]

console.log(firstElement)
// 10

// CASE 5

var nums = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]

var firstElement = shift(nums)

console.log(firstElement)
// 100
console.log(nums)
// [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000]