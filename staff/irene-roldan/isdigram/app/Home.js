//presentation

var title = document.querySelector('h1') //Selecciona el primer elemento <h1> en el documento HTML y guarda una referencia a él en la variable title.
var logoutButton = document.querySelector('button') // Selecciona el primer botón (<button>) en el documento HTML y guarda una referencia a él en la variable logoutButton.

try { //Intento de Recuperar Usuario y Actualizar Interfaz
    var user = retrieveUser(sessionStorage.username) //Intenta recuperar el usuario utilizando la función retrieveUser con el nombre de usuario almacenado en la sesión
    title.innerText = 'Hello, ' + user.name + '!' //actualiza el contenido del elemento <h1> con un saludo personalizado.
} catch (error) {
    alert(error.message) //Muestra un mensaje de alerta con el mensaje de error
}

logoutButton.addEventListener('click', function(){ //Evento de Cierre de Sesión
    sessionStorage.clear() //se borra la información de la sesión actual (nombre de usuario)

    // Modifica la dirección URL para redirigir a la página de inicio de sesión
    var loginAdress = location.href.replace('Home', 'Login')
    location.href = loginAdress
    //La página se recarga con la nueva dirección URL, llevando al usuario a la página de inicio de sesión
    
})