delete Array.prototype.forEach

function forEach(array, callback) {
    if (typeof callback !== 'function') throw new TypeError(typeof callback + ' is not a function')
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i, array)
    }
}


console.log('CASE 1')
var array1 = ['a', 'b', 'c'];
forEach(array1, function (element) { console.log(element) });
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


console.log('CASE 2')
var nums = [1, 2, 3]
forEach(nums, function (element) { console.log(element * 10) })
// 10
// 20
// 30


console.log('CASE 3')
var nums = [10, 20, 30, 40, 50]
var sum = 0
forEach(nums, function (num) {
    sum += num
})
console.log(sum)
// 150


console.log('CASE 4')
var nums = [10, 20, 30, 40, 50]
forEach(nums, function (num, index) {
    console.log(num + index)
})
// 10
// 21
// 32
// 43
// 54


console.log('CASE 5')
var nums = [10, 20, 30, 40, 50]
forEach(nums, function (num, index, array) {
    console.log(num + index + array.length)
})
// 15
// 26
// 37
// 48
// 59


console.log('CASE 6')
var nums = [10, 20, 30, 40, 50]
try {
    forEach(nums)
} catch (error) {
    console.log(error);
    // TypeError: undefined is not a function
}
// This is done so that we have more code it is not cut by the error and when running the code, it continues

