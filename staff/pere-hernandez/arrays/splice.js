delete Array.prototype.splice

function spliceArray (array, index, number, ...elements){
    let newArray = []
    if (number === 0){
        for (let i = 0; i < index; i++){
            newArray[i] = array[i]
        }
        newArray[index] = elements[0]
        for (let i = index; i < array.length; i++){
            newArray[i + 1] = array[i]
        }
        for (let i = 0; i < newArray.length; i++){
            array[i] = newArray[i]
        }
        return []
    } else if (number > 0 && index > -1) {
        let deleted = []
        for (let i = index; i < index + number; i++){
            deleted[deleted.length] = array[i]
        }
        for (let i = 0; i < index; i++){
            newArray[i] = array[i]
        }
        for (let i = 0; i < elements.length; i++){
            newArray[newArray.length] = elements[i]            
        }
        for (let i = index; i < array.length - number; i++){
            newArray[newArray.length] = array[i+number]
        }
        array.length = 0
        for (let i = 0; i < newArray.length; i++){
            array[i] = newArray[i]
        }
        return deleted
    } else if (index < 0){
        let deleted = []
        for (let i = array.length + index; i < array.length + index + number; i++){
            deleted[deleted.length] = array[i]
        }
        for (let i = 0; i < array.length + index; i++){
            newArray[i] = array[i]
        }
        for (let i = 0; i < elements.length; i++){
            newArray[newArray.length] = elements[i]
        }
        for (let i = array.length + index + number; i < array.length; i++){
            newArray[newArray.length] = array[i]
        }
        array.length = 0
        for (let i = 0; i < newArray.length; i++){
            array[i] = newArray[i]
        }
        return deleted
    }         
}

//CASE 1

let arr = ['Jan', 'Feb', 'Apr', 'May']
let result = spliceArray(arr, 2, 0, 'Mar')
console.log(arr)
//['Jan', 'Feb', 'Mar', 'Apr', 'May']
console.log(result)
//[]

//CASE 2
let arr1 = ['Jan', 'Feb', 'Dec', 'Apr']
result = spliceArray(arr1, 2, 1, 'Mar')
console.log(arr1)
//['Jan', 'Feb', 'Mar', 'Apr']
console.log(result)
//['Dec']

//CASE 3
let arr2 = ['Jan', 'Feb', 'Nov', 'Dec', 'Apr']
result = spliceArray(arr2, 2, 2, 'Mar')
console.log(arr2)
//['Jan', 'Feb', 'Mar', 'Apr']
console.log(result)
//['Nov', 'Dec']

//CASE 4
let arr3 = ['Jan', 'Nov', 'Dec', 'May', 'Jun']
result = spliceArray(arr3, 1, 2, 'Feb', 'Mar', 'Apr')
console.log(arr3)
//['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
console.log(result)
//['Nov', 'Dec']

//CASE 5
let arr4 = ['Jan', 'Nov', 'Dec', 'Feb']
result = spliceArray(arr4, 1, 2)
console.log(arr4)
//['Jan', 'Feb']
console.log(result)
//['Nov', 'Dec']

//CASE 6
let arr5 = ['Jan', 'Feb', 'Dec', 'Mar']
result = spliceArray(arr5, -2, 1)
console.log(arr5)
//['Jan', 'Feb', 'Mar']
console.log(result)
//['Dec']