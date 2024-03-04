// PRESENTATION

// var form = document.querySelector('form')
// var registerLink = document.querySelector('a')


(function () {
    var form = document.querySelector('form')
    form.addEventListener('submit', function (event) {
        console.log('form submit')
        event.preventDefault()
    
        var usernameInput = document.getElementById('username')
        var username = usernameInput.value
    
        var passwordInput = document.getElementById('password')
        var password = passwordInput.value
    
        try {
            logic.loginUser(username, password)
            form.reset()

            var homeAddress = location.href.replace('login', 'home')
            location.href = homeAddress
        } catch (error) {
            alert(error.message)
        }
    })
})()