//presentation 

var form = document.querySelector('form')
var loginLink = document.querySelector('a')

form.addEventListener('submit', function(event){
    console.log('form submit')

    event.preventDefault()

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

    var surnameInput = document.getElementById('surname')
    var surname = surnameInput.value

    try{

        registerUser(name, surname, birthdate, email, username, password)

        form.reset()

        loginLink.click()
    }catch(error){
        alert(error.message)
    }
})
