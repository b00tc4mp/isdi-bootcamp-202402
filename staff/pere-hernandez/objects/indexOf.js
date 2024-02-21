function indexOf (object, value){
    for (let i = 0; i < object.length; i++){
        if (object[i] === value)
            return i
    }
    return -1
}   

console.log('CASE 1')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}
let result = indexOf(colors, blue)
console.log(result)
//1