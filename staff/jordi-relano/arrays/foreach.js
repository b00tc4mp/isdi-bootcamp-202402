delete Array.prototype.forEach

function forEach(array, callback) {
    var callbackType = typeof callback
    if (callbackType !== 'function') {
        for (var i = 0; i < array.length; i++) {
            var element = array[i]
            callback(element, i, array)
        }
        throw new TypeError(callbackType + " " + callback + " " + ' is not a function');
    }
    else if (callback !== true || callback === true) {
        throw new TypeError(callbackType + " " + callback + " " + 'is not a function');
    }
}




console.log('CASE 1')

var nums = [10, 20, 30, 40, 50]
var other = [] // creamos una variable con array vacío, para meter la comprobación

forEach(nums, function (num) {
    other[other.length] = num // vamos metiendo cada número en el nuevo array
})
// 10
// 20
// 30
// 40
// 50



console.assert(nums[0] === 10, 10) // tenemos que comprobar que el valor original del array nums está bien
console.assert(nums[1] === 20, 20) // aquí comprobamos los datos
console.assert(nums[2] === 30, 30)
console.assert(nums[3] === 40, 40)
console.assert(nums[4] === 50, 50)
console.assert(nums.length === 5, 5)

console.assert(other[0] === nums[0], 0) // aquí comprobamos indices
console.assert(other[1] === nums[1], 1)
console.assert(other[2] === nums[2], 2)
console.assert(other[3] === nums[3], 3)
console.assert(other[4] === nums[4], 4)
console.assert(other.length === nums.length, 5)


console.log('CASE 2')

var nums = [10, 20, 30, 40, 50]
var sum = 0

forEach(nums, function (num) {
    sum += num
})

console.log(sum)
// 150

console.log('CASE 3')

var nums = [10, 20, 30, 40, 50]

forEach(nums, function (num, index) {
    console.log(num + index)
})
// 10
// 21
// 32
// 43
// 54

console.log('CASE 4')

var nums = [10, 20, 30, 40, 50]

forEach(nums, function (num, index, array) {
    console.log(num + index + array.length)
})
// 15
// 26
// 37
// 48
// 59

console.log('CASE 5')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums)
} catch (error) {
    console.log(error)
    // TypeError: undefined is not a function
}

console.log('CASE 6')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, {})
} catch (error) {
    console.log(error)
    // TypeError: object is not a function
}

console.log('CASE 7')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, 123)
} catch (error) {
    console.log(error)
    // TypeError: number 123 is not a function
}

console.log('CASE 8')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, true)
} catch (error) {
    console.log(error)
    // TypeError: boolean true is not a function
}

console.log('CASE 9')

var nums = [10, 20, 30, 40, 50]

try {
    forEach(nums, !true)
} catch (error) {
    console.log(error)
    // TypeError: boolean false is not a function
}