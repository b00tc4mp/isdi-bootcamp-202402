// PRESENTATION

var form = document.querySelector('form')
var registerLink = document.querySelector('a')

form.addEventListener('submit', function (event) {
    console.log('form submit login')

    event.preventDefault()

    var usernameInput = document.getElementById('username')
    var username = usernameInput.value

    var passwordInput = document.getElementById('password')
    var password = passwordInput.value

    try {
        alert('trying loginUser')
        loginUser(username, password)

        alert('Login worked - going to home page')
        form.reset()
        var homeAddress = location.href.replace('login', 'home')
        location.href = homeAddress
    } catch (error) {
        alert(error.message)
    }
})