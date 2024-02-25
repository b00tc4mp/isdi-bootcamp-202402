/**
 * Inserts an element in iterable object at specfified index.
 *
 * @param object - The iterable object to mutate. 
 * @param index - The index from which to insert the given values.
 * @param value - The value to insert.
 * 
 * @throws {TypeError} When object is not an object, or when index is not a number.
 */

function insert(object, index, value) { 

    if(!(object instanceof Object)){
        throw new TypeError(object + ' is not an Object')
    }else if (typeof index !== 'number') {
        throw new TypeError(index + ' is not a number')
    }
    
    for (var i = object.length; i > index; i--) { //i=3; i>1; i-- --> empieza a contar desde el final hasta el índice y decrementa en uno  
        object[i] = object[i - 1] //object[3] = object[2] (i=3 - 1) --> copia ese valor una posición más adelante
    }
    object[index] = value //object[1] = 'skyblue' --> se reemplaza el valor por el indicado
    
    object.length++ //suma uno a la largada del objeto 
    
    return object.length //devuelve la largada del objeto 

}


console.log('CASE 1: insert skyblue in index 1')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

var length = insert(colors, 1, 'skyblue')

console.assert(colors.length === 4, 4)

console.assert(colors[0] === 'red' && colors[1] === 'skyblue' && colors[2] === 'blue' && colors[3] === 'green', 'colors') 
console.assert(colors.length === 4, 4)


console.log('CASE 2: insert 300, at index 2')

var nums = {
    0: 100,
    1: 200,
    2: 400,
    3: 500,
    4: 600,
    5: 700,
    length: 6
}

var length = insert(nums, 2, 300)

console.assert(nums.length === 7, 7)

console.assert(nums[0] === 100 && nums[1] === 200 && nums[2] === 300 && nums[3] === 400 && nums[4] === 500 && nums[5] === 600 && nums[6] === 700, 'nums')
console.assert(nums.length === 7, 7)


console.log('CASE 3: fails on undefind object parameter')
console.assert(   
    function(){
        try {
            insert()
            return false
        } catch (error) {
            console.log(error)
            return true
        }
    }(),
    'CASE 3: fails on undefind object parameter'
)


console.log('CASE 4: fails on 1 as an object parameter')

console.assert(
    function(){
        try {
            insert(1)
            return false
        } catch (error) {
            console.log(error)
            return true
        }
    }(),
    'CASE 4: fails on 1 as an object parameter'
)

console.log('CASE 5: fails on undefined as index parameter')

var colors = {
    0: 'red',
    1: 'blue',
    2: 'green',
    length: 3
}

console.assert(
    function(){
        try {
            insert(colors)
            return false
        } catch (error) {
            console.log(error)
            return true
        }
    }(),
    'CASE 5: fails on undefined as index parameter'
)