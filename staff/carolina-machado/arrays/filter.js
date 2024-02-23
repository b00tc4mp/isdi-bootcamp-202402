function filter(array, func) {
    let newArr = []

    for (let i = 0; i < array.length; i++) {
        let element = array[i]

        if (func(element)) {

            newArr[newArr.length] = element

        }

    }
       return newArr
}

console.log('CASE 1')


let arr1 = [2, 3, 5, 4, 6, 10, 11, 12, 13, 20, 22]
let evenNumber = function(num) {
    return num % 2 === 0
}

let result = (filter(arr1, evenNumber))

//console.log(result)


console.assert(result[0] === 2) 
console.assert(result[1] === 4)
console.assert(result[2] === 6)
console.assert(result[3] === 10)
console.assert(result[4] === 12)
console.assert(result[5] === 20)
console.assert(result[6] === 22)

