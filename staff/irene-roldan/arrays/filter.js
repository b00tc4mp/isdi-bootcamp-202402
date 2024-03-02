delete Array.prototype.filter

function filter(array, callback) {
    var newArray = []
    
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
            
        if (callback(element)) {
            newArray[newArray.length] = element
        }     
    }
    return newArray
}

console.log('Case 1');
var words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

var result = words.filter(function (word) { return word.length > 6; });

console.assert(
    result && Array.isArray(result) && result.length === 3 && result.every(word => word.length > 6),
    'Assertion failed: Unexpected result'
);
