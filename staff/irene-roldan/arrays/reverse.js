delete Array.prototype.reverse

function reverse(array) {
    var result = []
    
    for (let index = array.length-1; index > -1 ; index--) {
        result[array.length-1 - index] = array[index] 
        
    }
    return result
}

console.log('Case 1')
var a = [1, 2, 3]
var b = reverse(a)

console.assert(a[0] === 1, 1)
console.assert(a[1] === 2, 2)
console.assert(a[3] === 3, 3)

console.assert(b[0] === 3, 3) 
console.assert(b[1] === 2, 2)
console.assert(b[2] === 1, 1)