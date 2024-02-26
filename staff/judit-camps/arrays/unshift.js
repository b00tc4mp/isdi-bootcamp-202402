delete Array.prototype.unshift

function unshift(arr, elements) {
    arr = arguments[0]
    elementsLength = arguments.length - 1

    for (var i = arr.length + elementsLength - 1; i > -1; i--) {
        arr[i] = arr[i - elementsLength]
    }

    for (var i = 0; i < elementsLength; i++) {
        arr[i] = arguments[i + 1]
    }

    return arr.length

}


console.log('CASE 1')
var nums = [1, 2, 3];
console.log(unshift(nums, 4, 5));
// Expected output: 5
console.log(nums);
// Expected output: Array [4, 5, 1, 2, 3]


console.log('CASE 2')
var arr = [1, 2];
console.log(unshift(arr, 0));
console.log(arr)
// arr es [0, 1, 2]
unshift(arr, -2, -1); // = 5
console.log(arr)
// arr es [-2, -1, 0, 1, 2]
unshift(arr, [-3]);
console.log(arr)
// arr es [[-3], -2, -1, 0, 1, 2]