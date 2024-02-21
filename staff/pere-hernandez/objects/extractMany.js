/**
 * Extracts an element in an iterable object and returns it.
 *
 * @param object - The iterable object to mutate. 
 * @param value - The value to extract.
 * 
 * @throws {TypeError} When object is not an object.
 * @throws {TypeError} When callback is not a function.
 */

function extract(object, callback){
    if (object instanceof Object === false)
        throw new TypeError(object + ' is not an Object')

    else if (callback instanceof Function === false)
        throw new TypeError(callback + ' is not a Function')
        
    else {
        let arrayObj = []
        let extracted = []
        let count = 0
        let extractedObject= {}
        
        for (let i = 0; i < object.length; i++){
            let elem = callback(object[i])
            
            if (elem){                
                extracted[count] = object[i]
                count++
            } else
                arrayObj[arrayObj.length] = object[i]
        }

        if (count > 0){
            for (let i = 0; i < arrayObj.length; i++){
                object[i] = arrayObj[i]
            }
            for (let i = count; i < object.length; i++)
                delete object[i]

            for (let i = 0; i < count; i++)
                object.length--

            for (let i = 0; i < extracted.length; i++){
                extractedObject[i] = extracted[i]
                extractedObject.length = i+1
            }
            return extractedObject
        }
    } return -1
}


console.log('CASE 1')

let cartoons = {
    0: {name: 'Sonic', color: 'blue'},
    1: {name: 'Goku', color:'orange'},
    2: {name: 'Mario', color:'red'},
    3: {name: 'Kirby', color:'pink'},
    4: {name: 'Naruto', color: 'orange'},
    5: {name: 'Charizard', color: 'orange'},
    length: 6
}

let result = extract(cartoons, function (result) {
    return result.color === 'orange'
})

console.log(result)
/*{
    0: {name: 'Sonic', color: 'blue'},
    1: {name: 'Mario', color: 'red'},
    2: {name: 'Kirby', color: 'pink'},
    length: 3
}*/
console.log(cartoons)
/*{
    0: {name: 'Blossom', color:'pink'},
    1: {name: 'Bubbles', color:'blue'},
    2: {name: 'Buttercup', color:'green'},
    length: 3
}*/


console.log('CASE 2')

result = extract(cartoons, function (result) {
    return result.name === 'Yoshi'
})

let cartoons1 = {
    0: {name: 'Sonic', color: 'blue'},
    1: {name: 'Goku', color:'orange'},
    2: {name: 'Mario', color:'red'},
    3: {name: 'Kirby', color:'pink'},
    4: {name: 'Naruto', color: 'orange'},
    5: {name: 'Charizard', color: 'orange'},
    length: 6
}

console.log(result)
//-1
console.log(cartoons1)
/*{
    0: {name: 'Sonic', color: 'blue'},
    1: {name: 'Goku', color:'orange'},
    2: {name: 'Mario', color:'red'},
    3: {name: 'Kirby', color:'pink'},
    4: {name: 'Naruto', color: 'orange'},
    5: {name: 'Charizard', color: 'orange'},
    length: 6
}*/


console.log('CASE 3')
let str = 'Cartoons'
try {
    extract(str, function (result) {
        return result.name === 'Pac-Man'
    })
} catch (error) {
    console.log(error)
    //Cartoons is not an Object
}


console.log('CASE 4')
try {
    extract(cartoons, str) 
} catch (error) {
    console.log(error)
    //Cartoons is not a Function
}