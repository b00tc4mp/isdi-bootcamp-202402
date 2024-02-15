debugger

delete Array.prototype.concat

function concat(array, ...element){
    
    var newArray = []
    for (var i = 0; i < array.length; i++){
        newArray[i] = array[i]
    }

    for (var i = 0; i < element.length; i++){
        if (element[i] instanceof Array){
            for (var j = 0; j < element[i].length; j++){
                newArray[newArray.length] = element[i][j]
            }
        } else {
            newArray[newArray.length] = element[i]
        }
    }
    return newArray
}

//CASE 1

let arr1 = ['kill', 'me', 'please']
let arr2 = ['I', "can't", 'take', 'it', 'anymore']
let result = concat(arr1, arr2)
console.log(result)
//['kill', 'me', 'please','I',"can't", 'take', 'it', 'anymore']

//CASE 2

let arr3 = ['make', 'it', 'stop']
let result1 = concat(arr1, arr2, arr3)
console.log(result1)
//['kill', 'me', 'please', 'I', "can't", 'take', 'it', 'anymore', 'make', 'it', 'stop']

//CASE 3

let str = 'please'
let result2 = concat(arr1, arr2, arr3, str)
console.log(result2)
//['kill', 'me', 'please', 'I', "can't", 'take', 'it', 'anymore', 'make', 'it', 'stop, 'please']