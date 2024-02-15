delete Array.prototype.at

function at(array, index) {
    var result
    
    if (index > -1) {

        result = array[index]

    } else {
        result = array[array.length + index]

    }
    
       return result


    }
    
// TERNARIO

function at(array, index) {
var targetIndex = index > -1? index : array.length + index
}
var element = array[targetIndex]

return element





// CASE 1

///var nums = [100, 200, 300, 400, 500]

//var num = at(nums, 3)

//console.log(num)
// 400

// CASE 2

//var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

//var char = at(chars, 5)

//console.log(char)
// ' '

// CASE 3

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

var char = at(chars, -3)

console.log(char)
// 'n'

/* CASE 4

var chars = ['h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']

var char = at(chars, -30)

console.log(char) */
// undefined