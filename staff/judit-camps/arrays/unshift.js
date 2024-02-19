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