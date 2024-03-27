// PRESENTATION

(function () {
    var form = document.querySelector('form')
    var loginLink = document.querySelector('a')

    form.addEventListener('submit', function (event) {
        console.log('form submit register')
        // prevent web from reloading itsef when clicking on submit button
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

        try {
            logic.registerUser(name, birthdate, email, username, password)

            form.reset() // clean form

            loginLink.click() // move to login page


        } catch (error) {
            alert(error.message)
        }
    })

})()