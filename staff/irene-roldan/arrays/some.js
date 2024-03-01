delete Array.prototype.some

function some(array, callback) {

    for (var i = 0; i < array.length; i++) {

        if (callback(array[i])) {
            return true 
        }
    }
    return false
}

console.log('Case 1')
var nums = [2, 2, 3, 4, 5]
var resta = some(nums, function(element) {return element - 2 === 0})

console.log(resta);
//true

console.log('Case 2')
var nums = [2, 2, 3, 4, 5]
var resta = some(nums, function(element) {return element - 1 === 0})

console.log(resta);
//false

console.log('Case 3')
var arr = []
var resta = some(arr, function(element) {return element - 1 === 0})
console.log(resta)
//false