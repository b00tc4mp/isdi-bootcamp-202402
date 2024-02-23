delete Array.prototype.forEach

function forEach(array, callback) {
    if (typeof callback !== 'function') {
        if (typeof callback === 'number' || typeof callback === 'boolean') {
            throw new TypeError(typeof callback + ' ' + callback + ' is not a function')
        } else throw new TypeError(typeof callback + ' is not a function')
    }
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i, array)
    }
}


console.log('CASE 1')
var array1 = ['a', 'b', 'c'];
var other = []
forEach(array1, function (element) { other[other.length] = (element) });
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
console.assert(array1[0] === 'a', 'a')
console.assert(array1[1] === 'b', 'b')
console.assert(array1[2] === 'c', 'c')
console.assert(array1.length === 3, 3)

for (var i = 0; i < other.length; i++) {
    console.assert(other[i] === array1[i], array1[i])
}


console.log('CASE 2: multiply elements by 10')
var nums = [1, 2, 3]
var other = []
forEach(nums, function (element) { other[other.length] = (element * 10) })
// 10
// 20
// 30
var resultArray = [10, 20, 30]
for (var i = 0; i < other.length; i++) {
    console.assert(other[i] === resultArray[i], resultArray[i])
}
console.assert(nums[0] === 1, 1)
console.assert(nums[1] === 2, 2)
console.assert(nums[2] === 3, 3)



console.log('CASE 3: sum of all numbers in array')
var nums = [10, 20, 30, 40, 50]
var sum = 0
forEach(nums, function (num) {
    sum += num
})
console.assert(sum === 150, 150)
console.assert(nums.length === 5, 'length: 5')
console.assert(nums[0] === 10, 10)
console.assert(nums[1] === 20, 20)
console.assert(nums[2] === 30, 30)
console.assert(nums[3] === 40, 40)
console.assert(nums[4] === 50, 50)


console.log('CASE 4: for each (num + index)')
var nums = [10, 20, 30, 40, 50]
var other = []
var expectedResult = [10, 21, 32, 43, 54]
forEach(nums, function (num, index) {
    other[other.length] = (num + index)
})
for (var i = 0; i < other.length; i++) {
    console.assert(other[i] === expectedResult[i], expectedResult[i])
}


console.log('CASE 5: sum index and the array length to each number')
var nums = [10, 20, 30, 40, 50]
var expectedResult = [15, 26, 37, 48, 59]
var result = []
forEach(nums, function (num, index, array) {
    result[result.length] = (num + index + array.length)
})
for (var i = 0; i < result.length; i++) {
    console.assert(result[i] === expectedResult[i], expectedResult[i])
}


console.log('CASE 6: ERROR - callback function is undefined')
var nums = [10, 20, 30, 40, 50]
try {
    forEach(nums)
} catch (error) {
    console.assert(error.name === 'TypeError', 'name');
    console.assert(error.message === 'undefined is not a function', 'message');
}
// Try-catch is done so that we have more code it is not cut by the error and when running the code, it continues


console.log('CASE 7: ERROR - callback is a plain object')
var nums = [10, 20, 30, 40, 50]
try {
    forEach(nums, {})
} catch (error) {
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'object is not a function', 'message')
}


console.log('CASE 8: callback is a number')
var nums = [10, 20, 30, 40, 50]
try {
    forEach(nums, 123)
} catch (error) {
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'number 123 is not a function', 'message')
}


console.log('CASE 9: callback is a boolean - true')
var nums = [10, 20, 30, 40, 50]
try {
    forEach(nums, true)
} catch (error) {
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'boolean true is not a function', 'message')
}


console.log('CASE 10: callback is a boolean - false')
var nums = [10, 20, 30, 40, 50]
try {
    forEach(nums, !true)
} catch (error) {
    console.assert(error.name === 'TypeError', 'name')
    console.assert(error.message === 'boolean false is not a function', 'message')
}