delete Array.prototype.map

function map(array, callback) {
    var newArray = []

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        var mappedElement = callback(element, i, array)

        newArray[i] = mappedElement
    }

    return newArray
}

console.log('CASE 1')

var numsCase1Map = [1, 4, 9, 16]

var numsX2 = map(numsCase1Map, function (x) { return x * 2 })
// array // Array { 0: 1, 1: 4, 2: 9, 3: 16, length: 4 }
// callback // function(x) { return x * 2 }

// var newArray = [] // Array { length: 0 }

// var element = array[0] // 1
// var mappedElement = callback(element) // 2
// newArray[0] = mappedElement // Array { 0: 2, length: 1 }

// var element = array[1] // 4
// var mappedElement = callback(element) // 8
// newArray[1] = mappedElement // Array { 0: 2, 1: 8, length: 2 }

// var element = array[2] // 9
// var mappedElement = callback(element) // 18
// newArray[2] = mappedElement // Array { 0: 2, 1: 8, 2: 18, length: 3 }

// var element = array[3] // 16
// var mappedElement = callback(element) // 32
// newArray[3] = mappedElement // Array { 0: 2, 1: 8, 2: 18, 3: 32, length: 4 }

// return newArray

console.assert(numsX2)
// [2, 8, 18, 32]

console.assert(numsX2[0] = 2, '2')
console.assert(numsX2[1] = 8, '8')
console.assert(numsX2[2] = 18, '18')
console.assert(numsX2[3] = 32, '32')
console.assert(numsX2.length === 4, 4)


console.assert(numsCase1Map)
// [1, 4, 9, 16]

console.assert(numsX2[0] = 1, '1')
console.assert(numsX2[1] = 4, '4')
console.assert(numsX2[2] = 9, '9')
console.assert(numsX2[3] = 16, '16')
console.assert(numsX2.length === 4, 4)


console.log('CASE 2')

var nums = [10, 20, 30, 40, 50]

var numsX100 = map(nums, function (num) {
    other = (num * 100)
})

console.assert(nums[0] === 10, 10)
console.assert(nums[1] === 20, 20)
console.assert(nums[2] === 30, 30)
console.assert(nums[3] === 40, 40)
console.assert(nums[4] === 50, 50)
console.assert(nums.length === 5, 5)

console.assert(numsX100)
// [1000, 2000, 3000, 4000, 5000]


console.assert(nums)
// [10, 20, 30, 40, 50]


console.log('CASE 3')

var chars = ['a', 'b', 'c']

var charsInUpper = map(chars, function (char) {
    return char.toUpperCase()
})

console.assert(chars)
// ['a', 'b', 'c']

console.assert(chars[0] === 'a', 'a')
console.assert(chars[1] === 'b', 'b')
console.assert(chars[2] === 'c', 'c')
console.assert(chars.length === 3, 3)


console.assert(charsInUpper)
// ['A', 'B', 'C']

console.assert(charsInUpper[0] === 'A', 'A')
console.assert(charsInUpper[1] === 'B', 'B')
console.assert(charsInUpper[2] === 'C', 'C')
console.assert(charsInUpper.length === 3, 3)


console.log('CASE 4')

var nums = [10, 20, 30]

var result = map(nums, function (element, index, array) {
    return element + ', ' + index + ', [' + array + ']'
})

console.assert(result)
//['10, 0, [10,20,30]', '20, 1, [10,20,30]', '30, 2, [10,20,30]']

console.assert(nums[0] === 10, 10)
console.assert(nums[1] === 20, 20)
console.assert(nums[2] === 30, 30)
console.assert(nums.length === 3, 3)


console.log('CASE 5')

var data = [
    { name: 'Peter', mark: 9 },
    { name: 'Wendy', mark: 9.6 },
    { name: 'Pepito', mark: 6 },
    { name: 'Campa', mark: 7 }
]

function calculateCake(element, index, array) {
    // ex: (7/31.6 * 100).toFixed(2)

    var sum = 0

    for (var i = 0; i < array.length; i++) {
        var item = array[i]

        sum += item.mark
    }

    var piece = parseFloat((element.mark / sum * 100).toFixed(2))

    return { name: element.name, piece: piece }
}

var cake = map(data, calculateCake)

console.log(cake)
/*
[
    { name: 'Peter', piece:  },
    { name: 'Wendy', piece:  },
    { name: 'Pepito', piece:  },
    { name: 'Campa', piece:  }
]
*/

console.log(data)
/*
[
    { name: 'Peter', mark: 9 },
    { name: 'Wendy', mark: 9.6 },
    { name: 'Pepito', mark: 6 },
    { name: 'Campa', mark: 7 }
]
*/

