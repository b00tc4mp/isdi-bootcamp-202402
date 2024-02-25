

function pop(array) {
    let popValue = ""
    if (array.length > 0) {
        popValue = array[array.length - 1]
        array.length = array.length - 1
        return popValue
    } else {
        return undefined
    }
}

console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]

var num = pop(nums)

console.log(num)
// 500
console.log(nums.length)
// 4
console.log(nums)
// [100, 200, 300, 400]

console.assert(num === 500, '500')
console.assert(nums.length === 4, 'length: 4')
console.assert(nums[0] === 100, '100')
console.assert(nums[1] === 200, '200')
console.assert(nums[2] === 300, '300')
console.assert(nums[3] === 400, '400')

console.log('CASE 2')

var animals = ['pigs', 'goats', 'sheep', 'cows']

var animal = pop(animals)

//console.log(animal)
// 'cows'
//console.log(animals.length)
// 3
//console.log(animals)
// ['pigs', 'goats', 'sheep']

console.assert(animal === 'cows', 'cows')
console.assert(animals.length === 3, 'length: 3')
console.assert(animals[0] === 'pigs', 'pigs')
console.assert(animals[1] === 'goats', 'goats')
console.assert(animals[2] === 'sheep', 'sheep')

console.log('CASE 3')

var sports = ['soccer', 'baseball']

var sport = pop(sports)

//console.log(sport)
// 'baseball'
//console.log(sports.length)
// 1
//console.log(sports)
// ['soccer']

console.assert(sport === 'baseball', 'baseball')
console.assert(sports.length === 1, 'length:1')
console.assert(sports[0] === 'soccer', 'soccer')

console.log('CASE 4')

var sports = []

var sport = pop(sports)

//console.log(sport)
// undefined
//console.log(sports.length)
// 0
//console.log(sports)
// []

console.assert(sport === undefined, 'undefined')
console.assert(sports.length === 0, '0')
console.assert(sports[0] === undefined, 'empty array')