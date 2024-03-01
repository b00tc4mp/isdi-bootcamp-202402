delete Array.prototype.every

function every(array, callback) {

    if(array.length === 0 ){
        return true
        
    }else {
        for (let i = 0; i < array.length; i++) {
    
            if (callback(array[i])) {
                return true
            }
    }
    return false
    }
}

console.log('Case 1')
var nums = [12, 54, 18, 130, 44]
var result = every(nums, function(elem) { return elem >= 10 });
console.assert(result === true, 'true')

console.log('Case 2')
var nums = [12, 5, 8, 130, 44]
var result = every(nums, function(elem) { return elem >= 10 });
console.assert(result === false, 'false')

console.log('Case 3')
var nums = []
var result = every(nums, function(elem) { return elem >= 10 });
console.assert(result === true, 'true')