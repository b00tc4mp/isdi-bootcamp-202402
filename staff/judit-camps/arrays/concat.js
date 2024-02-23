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

console.log('CASE 1: Concat 3 arrays into one -> ["a", "b", "c", "d", "e", "f"]')
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = ['g', 'h', 'i'];
var correct = ['a', 'b', 'c', 'd', 'e', 'f']
var array4 = concat(array1, array2, array3);
console.assert(array4[0] === 'a', 'a');
console.assert(array4[1] === 'b', 'b');
console.assert(array4[2] === 'c', 'c');
console.assert(array4[3] === 'd', 'd');
console.assert(array4[4] === 'e', 'e');
console.assert(array4[5] === 'f', 'f');
console.assert(array4[6] === 'g', 'g');
console.assert(array4[7] === 'h', 'h');
console.assert(array4[8] === 'i', 'i');


console.log('CASE 2: Concat 2 arrays -> ["a", "b", "c", 1, 2, 3]')
var letters = ["a", "b", "c"];
var numbers = [1, 2, 3];
var n = concat(letters, numbers);
console.assert(n[0] === 'a', 'a')
console.assert(n[1] === 'b', 'b')
console.assert(n[2] === 'c', 'c')
console.assert(n[3] === 1, 1)
console.assert(n[4] === 2, 2)
console.assert(n[5] === 3, 3)


console.log('CASE 3: Concat 1 array with numbers and arrays -> ["a", "b", "c", 1, 2, 3]')
var alpha = ["a", "b", "c"];
var alphaNumeric = concat(alpha, 1, [2, 3])
console.assert(alphaNumeric[0] === 'a', 'a')
console.assert(alphaNumeric[1] === 'b', 'b')
console.assert(alphaNumeric[2] === 'c', 'c')
console.assert(alphaNumeric[3] === 1, 1)
console.assert(alphaNumeric[4] === 2, 2)
console.assert(alphaNumeric[5] === 3, 3)


console.log('CASE 4: Concat 2 arrays with arrays inside -> [[1], 2, [3]]')
var num1 = [[1]]
var num2 = [2, [3]]
var nums = concat(num1, num2)
var correct = [[1], 2, [3]]
console.assert(nums[0][0] === correct[0][0], '[1]')
console.assert(nums[1] === correct[1], '2')
console.assert(nums[2][0] === correct[2][0], '[3]')


console.log("CASE 5: Concat an array with a string -> [1, 2, 'hello']")
var num = [1, 2];
var w = 'hello'
var newA = concat(num, w)
console.assert(newA[0] === 1, '1')
console.assert(newA[1] === 2, '2')
console.assert(newA[2] === 'hello', 'hello')