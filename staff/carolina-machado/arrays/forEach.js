

function forEach(array, func) {
    let newArr = []


    for (let i = 0; i < array.length; i++) {
        newArr[newArr.length] = func(array[i])
    }
    return newArr
}

let arr1 = [2, 4, 6]
let doble = function(num) {
    return num * 2
}

console.log(forEach(arr1, doble))