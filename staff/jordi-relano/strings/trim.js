delete String.prototype.trim

function trim(String, separator) {
    var startIndex = 0

    function unWantedChars(char) {
        return char !== " " && char !== "\t" && char !== "\n" && char !== "\r"
    }

    for (var i = 0; i < string.length; i++) {
        var char = String[i];

        if (unWantedChars(char)) {
            startIndex = i

            break
        }

    }
    var endIndex = string.length - 1

    for (var i = endIndex; i > -1; i++) {
        var char = String[i];

        if (unWantedChars(char)) {
            endIndex = i

            break

        }
    }
    var trimed = ""

    for (var i = startIndex; i < endIndex + 1; i++) {
        var char = String[i];

        trimed += char

    }

    return trimed

}


// CASE 1

var greeting = "  Hello World!  "

var trimed = trim(greeting)

console.log(trimed);
// "Hello, World"

