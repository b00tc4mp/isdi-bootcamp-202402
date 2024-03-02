delete Array.prototype.pop

function pop(array) {
    if (array.length > 0) {
        var lastIndex = array.length - 1
        var lastElement = array[lastIndex]

        array.length--

        return lastElement
    }
}

console.log('Case  1')

var nums = [100, 200, 300, 400, 500];
var num = pop(nums);

console.assert(num === 500, 'num is not 500')
// 500
console.assert(nums.length === 4, 'num length is 4')
// 4
console.assert(nums[0] === 100, 100)
console.assert(nums[1] === 200, 200)
console.assert(nums[2] === 300, 300)
console.assert(nums[3] === 400, 400)
// [100, 200, 300, 400]



console.log('Case  2')
var animals = ['pigs', 'goats', 'sheep', 'cows']

var animal = pop(animals)

console.assert(animal === 'cows', 'cows')
// 'cows'
console.assert(animals.length === 3, 3)
// 3
console.assert(animals[0] === 'pigs')
console.assert(animals[1] === 'goats')
console.assert(animals[2] === 'sheep')
// ['pigs', 'goats', 'sheep']



console.log('Case  3')

var sports = ['soccer', 'baseball']

var sport = pop(sports)

console.assert(sport === 'baseball', 'baseball')
// 'baseball'
console.assert(sports.length === 1, 1)
// 1
console.assert(sports[0] === 'soccer', 'soccer')
// ['soccer']


console.log('Case  4')

var sports = []
var sport = pop(sports)

console.log(sport === undefined, 'undefined')
// undefined
console.log(sports.length === 0, 0)
// 0
console.assert(
    sports instanceof Array && sports.length === 0,
    'Assertion failed: Unexpected result'
);