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

console.log('CASE 1: filter the words that have a length greater than 6')
var words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
var result = filter(words, function (word) { word.length > 6 });
var expected = ["exuberant", "destruction", "present"]
for (var i = 0; i < result.length; i++) {
    console.assert(result[i] === expected[i], expected[i])
}


console.log('CASE 2: filter the values that are greater than or equal to 10')
var l = [12, 5, 8, 130, 44]
function isBigEnough(value) {
    return value >= 10;
}
var filtered = filter(l, isBigEnough);
var expected = [12, 130, 44]
for (var i = 0; i < filtered.length; i++) {
    console.assert(filtered[i] === expected[i], expected[i])
}