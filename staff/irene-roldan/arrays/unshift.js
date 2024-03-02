delete Array.prototype.unshift

function unshift(array, ...elements) {
    var newArray = []
    
    for (let i = 0; i < elements.length; i++) {

        newArray[i] = elements[i]
    }

    for (let i = 0; i < array.length; i++) {
        newArray[i + elements.length] = array[i]
    }

    array = newArray

    return array.length
}

var array = [1, 2];

//console.log(unshift(array, 0))
//console.log(unshift(array, -2, -1))
console.log(unshift(array, [-3]))