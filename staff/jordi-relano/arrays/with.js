delete Array.prototype.with

function witho(array, index, value) {
    var newArray = [];



    for (let i = 0; i < array.length; i++) {
        newArray[newArray.length] = array[i];

    }
    newArray[index] = value

    return newArray

}



const arr = [1, 2, 3, 4, 5];
console.log(witho(arr, 2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]