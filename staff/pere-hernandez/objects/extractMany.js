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
        var found = {length: 0}
        
        for (var i = 0; i < object.length; i++){
            var elem = callback(object[i])
            if (elem && found.length < 1){
                found = object[i]
                found.length = 1
                delete object[i]
            } else
                object[i - found.length] = object[i]
        }

        delete object[object.length - found.length]
        object.length -= found.length
        return found
    }
}

console.log('CASE 1')

var powerpuff = {
    0: {name: 'Sonic', color: 'blue'},
    1: {name: 'Blossom', color:'pink'},
    2: {name: 'Bubbles', color:'blue'},
    3: {name: 'Buttercup', color:'green'},
    length: 4
}

var result = extract(powerpuff, function (result) {
    return result.color === 'blue'
})

console.log(result)
//{name:'Sonic', color: 'blue'}
console.log(powerpuff)
/*{
    0: {name: 'Blossom', color:'pink'},
    1: {name: 'Bubbles', color:'blue'},
    2: {name: 'Buttercup', color:'green'},
    length: 3
}*/


console.log('CASE 2')

result = extract(powerpuff, function (result) {
    return result.name === 'Mojo Yoyo'
})

console.log(result)
//-1
console.log(powerpuff)
/*{
    0: {name: 'Blossom', color:'pink'},
    1: {name: 'Bubbles', color:'blue'},
    2: {name: 'Buttercup', color:'green'},
    length: 3
}*/


console.log('CASE 3')
var str = 'Powerpuff Girls'
try {
    extract(str, function (result) {
        return result.name === 'Bubbles'
    })
} catch (error) {
    console.log(error)
    //Powerpuff Girls is not an Object
}


console.log('CASE 4')
try {
    extract(powerpuff, str) 
} catch (error) {
    console.log(error)
    //Powerpuff Girls is not a Function
}