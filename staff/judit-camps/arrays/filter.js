delete Array.prototype.findIndex

function filter(arr, fun) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        if (fun(arr[i])) {
            newArr[newArr.length] = arr[i]
        }
    }
    return newArr
}

console.log('CASE 1')
var words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
var result = filter(words, function (word) { word.length > 6 });
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]



console.log('CASE 2')
var l = [12, 5, 8, 130, 44]
function isBigEnough(value) {
    return value >= 10;
}

var filtered = filter(l, isBigEnough);
console.log(filtered)
// filtered is [12, 130, 44]