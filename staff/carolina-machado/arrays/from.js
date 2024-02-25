

function from(element, func) {
    
    let newArray = []
    
    if (func === undefined){
        for (var i = 0; i < element.length; i++){
            newArray[i] = element[i]
        }
        return newArray
    } else {
        for (var i = 0; i < element.length; i++){
            newArray[i] = func(element[i])
        }
        return newArray
    }
}

console.log('CASE 1')

var str = 'papaya'
var result = from(str)
//console.log(result)
//['p', 'a', 'p', 'a', 'y', 'a']

console.assert(result[0] === 'p')
console.assert(result[1] === 'a')
console.assert(result[2] === 'p')
console.assert(result[3] === 'a')
console.assert(result[4] === 'y')
console.assert(result[5] === 'a')



console.log('CASE 2')

var arr = [1, 2, 3]
var result = from(arr, (x) => x + 1)
//console.log(result)
//[2, 3, 4]

console.assert(result[0] === 2)
console.assert(result[1] === 3)
console.assert(result[2] === 4)



console.log('CASE 3')
var result = from(arr, (x) => x + x)
//console.log(result)
//[2, 4, 6]

console.assert(result[0] === 2)
console.assert(result[1] === 4)
console.assert(result[2] === 6)