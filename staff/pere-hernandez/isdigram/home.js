//presentation

var greeting = document.getElementById('greeting')
var logoutButton = document.querySelector('button')

try {
    var user = retrieveUser(sessionStorage.username)

    greeting.innerText = 'Hello, ' + user.username + '!'
} catch (error) {
    alert(error.message)
}


logoutButton.addEventListener('click', function (){
    sessionStorage.clear()

    var loginAdress = location.href.replace('home', 'login')

    location.href = loginAdress
})