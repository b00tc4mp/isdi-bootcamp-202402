delete Array.prototype.forEach

function forEach (element, callback){
    var callbackType = typeof callback
    if (callbackType !== 'function')
        throw new TypeError(callbackType + ' is not a function')
    else {
        let value = ''
        for (let i = 0; i < element.length; i++){
            value = element[i]
            callback(value, i, element)
        }    
    }    
}


function write (element){
    console.log(element)
}
let arr = [1, 2, 3]
forEach(arr, write)
//2, 4, 6

forEach(arr)
//error