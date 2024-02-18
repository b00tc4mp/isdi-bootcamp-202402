delete Array.prototype.with

function withFun(arr, index, value) {
    var newArr = arr
    if (index < 0) {
        index = arr.length + index
    }

    if (index >= arr.length || index < -arr.length) {
        throw new RangeError('Invalid index : ' + index)
    }

    for (var i = 0; i < arr.length; i++) {
        if (i === index) {
            newArr[i] = value
        } else newArr[i] = arr[i]
    }


    return newArr


}

console.log('CASE 1')
var arr = [1, 2, 3, 4, 5];
console.log(withFun(arr, 2, 6));
// [1, 2, 6, 4, 5]
console.log(arr);
// [1, 2, 3, 4, 5]


console.log('CASE 2')
var arr = [1, , 3, 4, , 6];
console.log(withFun(arr, 0, 2));
// [2, undefined, 3, 4, undefined, 6]


console.log('CASE 3')
var d = {
    length: 3,
    unrelated: "foo",
    0: 5,
    2: 4,
    3: 3, // ignored by with() since length is 3
};
console.log(withFun(d, 0, 1));
// [ 1, undefined, 4 ]


console.log('CASE 4')
var a = [1, 2, 3, 4, 5]
try {
    withFun(a, 5, 'p')
} catch (error) {
    console.log(error);
}
// Uncaught RangeError: Invalid index : 5