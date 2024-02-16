function find(array, func) {
    let newArr = []

    for (let i = 0; i < array.length; i++) {
        let element = array[i]

        if (func(element)) {
            

            newArr[newArr.length] = element
            break

        }

    }
       return newArr
}

let arr1 = ['dog', 'cat', 'parrot']
let evenNumber = function(string) {
    return string.length > 3
}

console.log(find(arr1, evenNumber))