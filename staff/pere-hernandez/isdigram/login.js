//presentatiom 

var form = document.querySelector('form')
var registrerLink = document.querySelector('a')

form.addEventListener('submit', function (event){
    event.preventDefault()

    var usernameImput = document.getElementById('username')
    var username = usernameImput.value

    var passwordInput = document.getElementById('password')
    var password = passwordInput.value

    try {
        loginUser(username, password)

        var homeAdress = location.href.replace('login', 'home')
        location.href = homeAdress
    } catch (error) {
        alert(error.message)
    }
})