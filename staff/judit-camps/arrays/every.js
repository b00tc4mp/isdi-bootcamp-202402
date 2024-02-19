delete Array.prototype.every

function every(arr, callback) {
    var stillTrue = true
    for (var i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr) && arr[i] != undefined) {
            stillTrue = false
        }
    }
    return stillTrue
}

console.log('CASE 1')
function isBigEnough(element, index, array) {
    return element >= 10;
}
console.log(every([12, 5, 8, 130, 44], isBigEnough));
// false
console.log(every([12, 54, 18, 130, 44], isBigEnough));
// true


console.log('CASE 2')
console.log(every([1, , 3], function (x) { x !== undefined }));
// true
console.log(every([2, , 2], function (x) { x === 2 }));
// true

console.log('CASE 3')
const d = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: 345, // ignored by every() since length is 3
};
console.log(every(d, function (x) { typeof x === "string" }),);
// true

console.log('CASE 4')