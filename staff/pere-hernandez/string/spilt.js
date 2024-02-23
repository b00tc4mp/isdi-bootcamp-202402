delete String.prototype.split


function split(string, separator) {
    
    let words = []
    let count = 0
    let word = ''
    for (let i = 0; i < string.length; i++){        
        if (string[i] !== separator){
            
            word = word + string[i]
        } else {
            words[count] = word
            count++
            word = ''
        }
    }
    words[count] = word
    return words
}

// CASE 1

var s = 'hola mundo'

var words = split(s, ' ')

console.log(words)
// ['hola', 'mundo']