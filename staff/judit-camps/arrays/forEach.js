delete Array.prototype.forEach

function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i])
    }
}


console.log('CASE 1')
var array1 = ['a', 'b', 'c'];

forEach(array1, (element) => console.log(element));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"