delete Array.prototype.concat

function concat(...arrays) {
    var newArray = []
    for (var el = 0; el < arrays.length; el++) {
        if (arrays[el] instanceof Array) {
            for (var value = 0; value < arrays[el].length; value++) {
                newArray[newArray.length] = arrays[el][value]
            }
        } else {
            newArray[newArray.length] = arrays[el]
        }
    }
    return newArray
}

// CASE 1
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = ['g', 'h', 'i'];
var array4 = concat(array1, array2, array3);

console.log(array4);
// ["a", "b", "c", "d", "e", "f"]


// CASE 2
var letters = ["a", "b", "c"];
var numbers = [1, 2, 3];

var n = concat(letters, numbers);
// ['a', 'b', 'c', 1, 2, 3]


// CASE 3
var alpha = ["a", "b", "c"];
var alphaNumeric = concat(alpha, 1, [2, 3]);

console.log(alphaNumeric);
// ['a', 'b', 'c', 1, 2, 3]


// CASE 4
var num1 = [[1]];
var num2 = [2, [3]];
var nums = concat(num1, num2);

console.log(nums);
// [[1], 2, [3]]


// CASE 5
var num = [1, 2];
var w = 'hello'
var newA = concat(num, w)

console.log(newA)
// [1, 2, 'hello']