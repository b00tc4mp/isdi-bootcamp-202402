delete Array.prototype.from

function from(arrayLike, formula) {
    var newArray = []
    if (formula == undefined) {
        for (var el = 0; el < arrayLike.length; el++) {
            newArray[newArray.length] = arrayLike[el]
        }
    } else {
        for (var el = 0; el < arrayLike.length; el++) {
            newArray[newArray.length] = formula(arrayLike[el])
        }
    }
    return newArray
}


// CASE 1


console.log(from('foo'));
// Expected output: Array ["f", "o", "o"]



// CASE 2
console.log(from([1, 2, 3], function (x) { return x + x }));
// Expected output: Array [2, 4, 6]

