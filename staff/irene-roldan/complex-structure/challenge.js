const car = {
    color: "black",
    wheels: 3,
    engine: { 
        cylinders: 4, 
        size: 20
    },
    start: function() {
        console.log("Motor ...");
    },
    stop: function() {
        console.log("Motor ...");
    },
};

/*
Cambiar el color del coche a Rojo
Súmale 1 rueda
Multiplica por 10 las cilindradas
El tamaño divídelo entre 5.
Cambia el estado del motor según este encendido o apagado.
 
car.color = "red";

car.wheels = car.wheels + 1

car.engine.cylinders = car.engine.cylinders * 10

car.engine.size = car.engine.size / 5

start: function() {
console.log("Motor encendido");
}
stop: function() {
console.log("Motor apagado");
}
*/