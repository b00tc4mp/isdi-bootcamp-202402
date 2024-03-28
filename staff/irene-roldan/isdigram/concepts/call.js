/**
 * 
 * @param {*} name 
 * @param {*} surname 
 * 
 * El uso de this en funciones en JavaScript es fundamental para acceder a propiedades y métodos de un objeto dentro del contexto de esa función. 
 * 
 * Métodos de objeto: Cuando una función se invoca como un método de un objeto, this se refiere al propio objeto.
 * 
 * Constructor de objetos: Cuando una función se invoca con el operador new, this se refiere a la nueva instancia del objeto que se está creando.
 * 
 * Contexto global: En el contexto global, this se refiere al objeto global (window en un navegador, global en Node.js)
 * 
 * Funciones sin contexto: Cuando una función se invoca de forma independiente, sin estar asociada a un objeto o contexto específico, this se refiere al objeto global en el modo estricto (undefined en el modo no estricto).
 * 
 * 
 */

function Person(name, surname){
    this.name = name
    this.surname
}

var peter = new Person('Peter', 'Pan')

console.log(peter)

var o = {}

Person.call(o, 'olivia', 'Darling')

console.log(o)


