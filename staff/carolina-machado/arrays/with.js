

function withFunc(array, index, value) {

        var newArray = []
        for (var i = 0; i < array.length; i++){
            if (i === index)
                newArray[i] = value
            else if (array[i] == null)
                newArray[i] = undefined
            else
                newArray[i] = array[i]
        }
        return newArray
    }
    




//console.log('CASE 1')

var arr = [1, 2, 3, 4, 5];

var console.log(withFunc(arr, 2, 6));

// [1, 2, 6, 4, 5]
console.log(arr);
// [1, 2, 3, 4, 5]

console.assert()