// PRESENTATION
var title = document.querySelector('h1')
var logoutButton = document.querySelector('button')

try {
    var user = logic.getUser(sessionStorage.username)
    title.innerText = 'Hello ' + user.name + '!'
} catch (error) {
    alert(error.message)
}

logoutButton.addEventListener('click', function () {
    // calling the function to logout the user and going back to the login page
    logic.logoutUser()

    var loginAddress = location.href.replace('home', 'login')
    location.href = loginAddress
})
