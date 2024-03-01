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

console.log('Case 1')
var words = ['spray', 'elite', 'exuberant', 'destruction', 'present']
var result = filter(words, function(word) {word.length > 6})
console.log(result);
//["exuberant", "destruction", "present"]
