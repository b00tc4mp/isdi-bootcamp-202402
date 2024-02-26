delete Array.prototype.includes

function includes(array, element, index) {
    if (index >= 0 && index < array.length){
        for (var i = index; i < array.length; i++){
            if (array[i] === element || (isNaN(element) && isNaN(array[i])))
                return true
        }
        return false
    } else if (index < 0 && (index * (-1)) <= array.length){
        for (var i = array.length + index; i < array.length; i++){
            if (array[i] === element)
                return true
        }
        return false
    } else if (index < 0 && (index * (-1)) > array.length){
        for (var i = 0; i < array.length; i++){
            if (array[i] === element)
                return true
        }
        return false
    } else if (index === undefined || isNaN(index)){
        for (var i = 0; i < array.length; i++){
            if (array[i] === element || (isNaN(element) && isNaN(array[i])))
                return true
        }
        return false
    }
}


//CASE 1

    
var arr = [4, 8, 15, 16, 23, 42]

var result = includes(arr, 16, 0)
console.log(result)
//true

//CASE 2

var result = includes(arr, 42, -6)
console.log(result)
//true

//CASE 3

var result = includes(arr, 42, -8)
console.log(result)
//true

//CASE 4

var result = includes(arr, 8)
console.log(result)
//true

//CASE 5

var result = includes(arr, 10)
console.log(result)
//false

//CASE 6
let arr1 = [1, 2, NaN]
var result = includes(arr1, NaN, 0)
console.log(result)
//true