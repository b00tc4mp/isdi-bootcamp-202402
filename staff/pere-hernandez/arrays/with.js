delete Array.prototype.with

function withArray(array, index, replace){
    array[index] = replace
    for (let i = 0; i < array.length; i++){
        if (array[i] == null)
            array[i] = undefined
    }
}

//CASE 1
let arr =['Albus', 'Percival', 'Josefina', 'Bryan', 'Dumbeldore']
withArray(arr, 2, 'Wulfric')
console.log(arr)
//['Albus', 'Percival', 'Wulfric', 'Bryan', 'Dumbeldore']

//CASE 2
let arr1 = ['Gryffindor', 'Eagleclaw,',,'Slytherin']
withArray(arr1, 1, 'Ravenclaw')
console.log(arr1)
//['Gryffindor', 'Ravenclaw', undefined, 'Slytherin']