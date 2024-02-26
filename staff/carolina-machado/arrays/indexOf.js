delete Array.prototype.indexOf

function indexOf(array, element, index) {
    if (index >= array.length) {
        return -1
    } else if (index < 0 && array.length + index < 0 || index === undefined) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] === element) {
                return i
            }
        }
    } else if (index < 0 && array.length + index > 0) {
        for (var i = array.length + index; i < array.length; i++) {
            if (array[i] === element) {
                return i
            }
        }
    } else {
        for (var i = index; i < array.length; i++) {
            if (array[i] === element) {
                return i
            }
        }
    }
    return -1
}



console.log('CASE 1')

var array = [2, 9, 9]

var result = (indexOf(array, 2))

//console.log(result)
// 0

console.assert(result === 0)

console.log('CASE 2')

var array = [2, 9, 9]

var result = (indexOf(array, 7))
//console.log(result)
// -1
console.assert(result === -1)

console.log('CASE 3')

var array = [2, 9, 9];

var result = (indexOf(array, 9, 2))
//console.log(result)
// 2
console.assert(result === 2)