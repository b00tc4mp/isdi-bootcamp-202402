delete Array.prototype.includes

function includes(array, searchElement, fromIndex) {
    var included = false
    var targetIndex
    if (fromIndex >= array.length) {
        return false
    } else if (fromIndex < 0 && array.length + fromIndex < 0 || fromIndex === undefined) {
        targetIndex = 0
    } else if (fromIndex < 0 && array.length + fromIndex > 0) {
        targetIndex = array.length + fromIndex
    } else {
        targetIndex = fromIndex
    }
    for (var i = targetIndex; i < array.length; i++) {
        if (array[i] === searchElement) {
            included = true
        }
    }
    return included
}


// CASE 1
var array1 = [1, 2, 3];
console.log(includes(array1, 2));
// true


// CASE 2
var pets = ['cat', 'dog', 'bat'];
console.log(includes(pets, 'cat'));
// true
console.log(includes(pets, 'at'));
// false


// CASE 3
var arr = ["a", "b", "c"];
console.log(includes(arr, "c", 3));
// false
console.log(includes(arr, "c", 100));
// false


// CASE 4
