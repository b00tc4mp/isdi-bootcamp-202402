delete Array.prototype.push

debugger
function push(array, element1) {
    debugger

    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            array[array.length] = arguments[i]
        }
    }
    return array.length

}

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
var food = ['apple', 'banana']
var count = push(food)

console.log(count)
// 2
console.log(food)
// ['apple', 'banana']


// CASE 5
var sports = ['soccer', 'baseball']
var length = push(sports, undefined)
console.log(length)
// 3
console.log(sports)
// ['soccer', 'baseball', undefined]


// CASE 6
var sports = ['soccer', 'baseball']
var length = push(sports, sports)
console.log(length)
// 3
console.log(sports)
// ['soccer', 'baseball', undefined]