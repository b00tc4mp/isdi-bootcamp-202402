/**
 * Closure es una función que encapsula otras variables y/o funciones que únicamente son devueltas con el operador return.
 * Produce nuevos ámbitos o alcances para las variables.
 * Permite crear una estructura de datos privados.
*/


var miContador = function(){
    var _contador = 0

    function incrementar() {
        return _contador++
    }
    function decrementar() {
        return _contador--
    }
    function valor() {
        return _contador
    }

    return {
        incrementar:incrementar,
        decrementar:decrementar,
        valor:valor
    }

}

