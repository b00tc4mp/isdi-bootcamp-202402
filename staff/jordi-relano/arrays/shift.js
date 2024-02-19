function shift(array) {

    if (array.length > 0) {
        var shifted = array[0];
        debugger
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i + 1]

        }
        array.length--
        return shifted
    }
}


console.log("CASE 1")

const array1 = ["jordi", "relano", "zorrilla"];

console.log(array1)
const resultado = shift(array1)

console.log(resultado)

console.log(array1)