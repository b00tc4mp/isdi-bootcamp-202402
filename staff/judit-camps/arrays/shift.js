delete Array.prototype.shift

function shift(arr) {
    var shifted = arr[0]

    for (var i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1]
    }

    if (arr > 0) {
        arr.length--
    } else arr.length = 0


    return shifted
}

console.log('CASE 1')
var array1 = [1, 2, 3];
var firstElement = shift(array1);
console.log(array1);
// Expected output: Array [2, 3]
console.log(firstElement);
// Expected output: 1


console.log('CASE 2')
var myFish = ["angel", "clown", "mandarin", "surgeon"];
console.log("myFish before:", myFish);
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']
var shifted = shift(myFish);
console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']
console.log("Removed this element:", shifted);
// Removed this element: angel


console.log('CASE 3')
var d = {
    length: 3,
    unrelated: "foo",
    2: 4,
};
console.log(shift(d));
console.log(d);
// { '1': 4, length: 2, unrelated: 'foo' }

var plainObj = {};
// There's no length property, so the length is 0
shift(plainObj);
console.log(plainObj);
// { length: 0 }