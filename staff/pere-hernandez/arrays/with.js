delete Array.prototype.with

function withArray(array, index, replace){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        if (i === index)
            newArray[i] = replace
        else if (array[i] == null)
            newArray[i] = undefined
        else
            newArray[i] = array[i]
    }
    return newArray
}

//CASE 1
let arr =['Albus', 'Percival', 'Josefina', 'Bryan', 'Dumbeldore']
let result = withArray(arr, 2, 'Wulfric')
console.log(result)
//['Albus', 'Percival', 'Wulfric', 'Bryan', 'Dumbeldore']
console.log(arr)
//['Albus', 'Percival', 'Josefina', 'Bryan', 'Dumbeldore']

//CASE 2
let arr1 = ['Gryffindor', 'Eagleclaw,',,'Slytherin']
result = withArray(arr1, 1, 'Ravenclaw')
console.log(result)
//['Gryffindor', 'Ravenclaw', undefined, 'Slytherin']
console.log(arr1)
//['Gryffindor', 'Eagleclaw,',,'Slytherin']