delete Array.prototype.find

function find(array, callback) {

    // creamos variable auxiliar para almacenar array
    // creamos variable auxiliar para matchear callback con elemento array
    // retornamos elemento

    for (let i = 0; i < array.length; i++) {
        // var elem = array[i]
        if (callback(array[i]))
            // var matches = callback(elem)
            return array[i]
        //if (matches) return elem

    }



}

const array = [5, 12, 8, 130, 44];


const found = find(array, (element) => element > 100);
// const found = find(array, function (element) { return element > 100});

console.log(found);
// Expected output: 130

//aserciones: para verificar resultados
console.assert(found === 130, "130");
// si es cierto no dice nada, si es falso te da un error: assertion failed , el "130" es el comentario que te da la consola si falla la comprobación
console.assert(array[0] === 5, "5");
console.assert(array[1] === 12, "12");
console.assert(array[3] === 8, "8");
console.assert(array[4] === 130, "130");
console.assert(array[5] === 44, "44");
console.assert(nums.length === 5, "5");
// [5, 12, 8, 130, 44] no tiene que dar error, es decir no saldrá nada
// si sale un error es assertion failed = 130
// automatización, la máquina comprueba por ti los errores
// si una empresa te pide un test automático, esto es