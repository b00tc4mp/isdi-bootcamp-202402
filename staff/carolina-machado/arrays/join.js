delete Array.prototype.join

function joinArray(array, separator) {
    let string = ''
    if (separator === undefined)
        separator = ','
    for (var i = 0; i < array.length -1; i++){
        if (array[i] instanceof Array === false)
            string += array[i] + separator
        else 
            string += joinArray(array[i]) + separator
    }
    if (array[array.length -1] instanceof Array === false)
        if (array.length === 0)
            string += ''
        else
            string += array[array.length -1]
    else
        string += joinArray(array[i])    
    return string
}

console.log('CASE 1')

var arr = ['hola', 'caracola', 'venite']
var result = joinArray(arr,' ')
console.log(result)
//'hola caracola venite'

console.log('CASE 2')
var arr1 = [1, 2, 3]
result  = joinArray(arr1, '-')
console.log(result)
//'1-2-3'

console.log('CASE 3')
result = joinArray(arr)
console.log(result)
//hola,caracola,venite

console.log('CASE 4')
result  = joinArray(arr1, '')
console.log(result)
//'123'

console.log('CASE 5')
let matrix = [[1,2,3],[4,5,6],[7,8,9]]
result = joinArray(matrix, ';')
console.log(result)
//'1,2,3;4,5,6;7,8,9'

console.log('CASE 6')
let arr2 = []
let arr3 = [1, [3, arr2, 4], 2]
result = joinArray(arr3, ";")
//'1;3,,4;2'