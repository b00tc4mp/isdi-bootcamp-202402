delete Array.prototype.push

function push(array, ...element1) {
    debugger
    var item
    for( var i = 0; i < element1.length; i++){
        item = array.length
        array[item] = element1[i]
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
var animals = ['pigs', 'goats', 'sheep']
var length = push(animals, 'cows')

console.log(length)
// 4
console.log(animals)
// ['pigs', 'goats', 'sheep', 'cows'] 


// CASE 3
var sports = ['soccer', 'baseball']
var length = push(sports)

console.log(length);
// 2
console.log(sports);
// ['soccer', 'baseball']


// CASE 4
var sports = ['soccer', 'baseball']
var length = push(sports, undefined)

console.log(length);
//3
console.log(sports);
// ['soccer', 'baseball', undefined]