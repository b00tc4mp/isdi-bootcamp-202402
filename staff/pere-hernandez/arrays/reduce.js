delete Array.prototype.reduce

function reduceArray(array, callback, init){
    if (arguments.length > 2){
        var acumulator = init;
        for (let i = 0; i < array.length; i++){
            acumulator = callback(acumulator, array[i])
        }
        return acumulator
    } else {
        var acumulator = array[0]
        for (let i = 1; i < array.length; i++){
            acumulator = callback(acumulator, array[i])
        }
        return acumulator
    }
}
//CASE 1
let arr = [1, 2, 3, 4]
let result = reduceArray(arr, (x, y) => x + y, 0)
console.log(result)
//10

//CASE 2
let arr1 = [10, 5, 3, 2]
result = reduceArray(arr1, (x, y) => x - y, 20)
console.log(result)
//0


//CASE 3
result = reduceArray(arr1, (x, y) => x - y)  
console.log(result)
//0