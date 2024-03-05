//presentation

(function () {
    var form = document.querySelector('form')
    var loginLink = document.querySelector('a')

    form.addEventListener('submit', function (event){
        event.preventDefault()
        
        var usernameImput = document.getElementById('username')
        var username = usernameImput.value

        var emailImput = document.getElementById('email')
        var email = emailImput.value

        var passwordImput = document.getElementById('password')
        var password = passwordImput.value

        var confimrPasswordImput = document.getElementById('confirm')
        var confirmedPassword = confimrPasswordImput.value

        try {
            logic.registerUser(username, email, password, confirmedPassword)

            form.reset()

            loginLink.click()
        } catch (error) {
            alert(error.message)
        }
    })
})()
