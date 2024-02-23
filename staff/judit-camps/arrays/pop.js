delete Array.prototype.pop

function pop(array) {
    if (array.length > 0) {
        var last = array[array.length - 1]
        array.length = array.length - 1
        return last
    }
}

console.log('CASE 1: pop 500 out of [100, 200, 300, 400, 500]')
var nums = [100, 200, 300, 400, 500]
var num = pop(nums)
console.assert(num === 500, '500')
console.assert(nums.length === 4, 'length: 4')
console.assert(nums[0] === 100, '100')
console.assert(nums[1] === 200, '200')
console.assert(nums[2] === 300, '300')
console.assert(nums[3] === 400, '400')


console.log("CASE 2: pop 'cows' out of ['pigs', 'goats', 'sheep', 'cows']")
var animals = ['pigs', 'goats', 'sheep', 'cows']
var animal = pop(animals)
console.assert(animal === 'cows', 'popped: cows')
console.assert(animals.length === 3, 'length: 3')
console.assert(animals[0] === 'pigs', 'pigs')
console.assert(animals[1] === 'goats', 'goats')
console.assert(animals[2] === 'sheep', 'sheep')


console.log("CASE 3: pop 'baseball' out of ['soccer', 'baseball']")
var sports = ['soccer', 'baseball']
var sport = pop(sports)
console.assert(sport === 'baseball', 'popped: baseball')
console.assert(sports.length === 1, 'length:1')
console.assert(sports[0] === 'soccer', 'soccer')


console.log("CASE 4: pop an empty array -> undefined")
var sports = []
var sport = pop(sports)
console.assert(sport === undefined, 'popped: undefined')
console.assert(sports.length === 0, 'length: 0')
console.assert(sports[0] === undefined, 'empty array')

