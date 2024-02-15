delete Array.prototype.concat()

function concat (arrays){
   // crear una variable auxiliar 'result' con valor [] como contenedor para incluir las dos arrays
    var result=[]
    
    //bucle for para recorrer array
    for (var i = 0; i < arrays.length; i++) {
        //otro bucle for para recorrer los elementos de ese array
        for (let j = 0; j < arrays[i].length; j++) {
            //declarar la variable auxiliar 'result' es igual al contenido de los índices de las arrays.
            result[result.length]=arrays[i][j]
        }
    }
    //devolver valor de variable auxiliar 'result'
    return result
}

function concatArguments(){
    var result=[]

    for(var i = 0; i = arguments.length;i++){
        if(arguments[i].length > result.length){
            longest = arguments[i]
        }
    }

}

var a = ["a", "b", "c"];
var b = [1, 2, 3]


var char = concat([a, b])
console.log(char);