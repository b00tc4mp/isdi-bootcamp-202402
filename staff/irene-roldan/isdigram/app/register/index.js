//presentation 

(function(){

    if(logic.isUserLoggedIn()) {
        location.href = '../home'

        return
    }
    
    var form = document.querySelector('form') // selecciona el primer formulario en el documento HTML y guarda una referencia a él en la variable 'form' 
    var loginLink = document.querySelector('a') // selecciona el primer enlace (<a>) en documento HTML y guarda una referencia a él en la variable 'loginLink 

    form.addEventListener('submit', function(event){ // registra un evento a un objeto para console.log('form submit). Cuando el formulario se envía se ejecuta. 
        console.log('form submit')

        event.preventDefault() //evita el comportamiento predeterminado del formulario, que es enviar una solicitud al servidor y recargar la página

        //Se obtienen los valores de los campos del formulario utilizando document.getElementById('nombreCampo').value. Estos valores se guardan en variables como name, birthdate, email, etc.
        var nameInput = document.getElementById('name')
        var name = nameInput.value

        var birthdateInput = document.getElementById('birthdate')
        var birthdate = birthdateInput.value

        var emailInput = document.getElementById('email')
        var email = emailInput.value

        var usernameInput = document.getElementById('username')
        var username = usernameInput.value

        var passwordInput = document.getElementById('password')
        var password = passwordInput.value


        //Si se produce un error durante la ejecución de registerUser, se captura y se muestra un mensaje de alerta.
        try{

            logic.registerUser(name, birthdate, email, username, password)

            form.reset()

            location.href = '../login'
        }catch(error){
            alert(error.message)
        }
    })
})()