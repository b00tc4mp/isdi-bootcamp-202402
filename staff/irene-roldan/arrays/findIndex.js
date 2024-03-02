delete Array.prototype.findIndex

function findIndex(array, callback) {

    for(var i = 0; i < array.length; i++){

        if (callback(array[i])) 
            return i
    
    }

    return -1
}


console.log('CASE 1')
var nums = [5, 12, 8, 130, 44]
var searchingIndex = findIndex(nums, function(element) {return element > 13})
console.assert(searchingIndex === 3, 3)