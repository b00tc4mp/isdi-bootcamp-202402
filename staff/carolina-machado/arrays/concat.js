function concat(array, array2) {
    if (arguments.length < 3) {
        var newArray = []

        for (var i = 0; i < array.length; i++) {
            var element = array[i]

            newArray[i] = element
        }

        for (var i = 0; i < array2.length; i++) {
            var element = array2[i]

            newArray[newArray.length] = element
        }

        return newArray
    } else {
        var newArray = []

        for (var i = 0; i < arguments.length; i++) {
            var array = arguments[i]

            for (var j = 0; j < array.length; j++) {
                var element = array[j]

                newArray[newArray.length] = element
            }
        }

        return newArray
    }
}

console.log('CASE 1')

var nums = [100, 200, 300, 400, 500]
var animals = ['pigs', 'goats', 'sheep', 'cows']

var result = concat(nums, animals)

//console.log(result.length)
// 9
//console.log(result)
// [100, 200, 300, 400, 500, 'pigs', 'goats', 'sheep', 'cows']

console.assert(result[0] === 100, 100)
console.assert(result[1] === 200, 200) 
console.assert(result[2] === 300, 300) 
console.assert(result[3] === 400, 400) 
console.assert(result[4] === 500, 500) 
console.assert(result[5] === 'pigs', 'pigs') 
console.assert(result[6] === 'goats', 'goats') 
console.assert(result[7] === 'sheep', 'sheep') 
console.assert(result[8] === 'cows', 'cows')




console.log('CASE 2')

var nums = []
var animals = []

var result = concat(nums, animals)

//console.log(result.length)
// 0
//console.log(result)
// []

console.assert(result = [])



console.log('CASE 3')


var animals = ['pigs', 'goats', 'sheep', 'cows']
var fruits = ['apples', 'bananas', 'oranges', 'lemons']
var cars = ['lambo', 'ferra', 'merce', 'porsc']

var result = concat(animals, fruits, cars)

//console.log(result)
// ['pigs', 'goats', 'sheep', 'cows', 'apples', 'bananas', 'oranges', 'lemons', 'lambo', 'ferra', 'merce', 'porsc']



console.assert(result[0] === 'pigs', 'pigs') 
console.assert(result[1] === 'goats', 'goats') 
console.assert(result[2] === 'sheep', 'sheep') 
console.assert(result[3] === 'cows', 'cows')
console.assert(result[4] === 'apples', 'apples')
console.assert(result[5] === 'bananas', 'bananas') 
console.assert(result[6] === 'oranges', 'oranges') 
console.assert(result[7] === 'lemons', 'lemons') 
console.assert(result[8] === 'lambo', 'lambo')
console.assert(result[9] === 'ferra', 'ferra')
console.assert(result[10] === 'merce', 'merce')
console.assert(result[11] === 'porsc', 'porsc')