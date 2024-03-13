//presentation 

(function () {
    if (logic.checkLoggedInStatus()){
        location.href = '../home'

        return
    }

    
    var form = document.querySelector('form')

    form.addEventListener('submit', function (event){
        event.preventDefault()

        var usernameImput = document.getElementById('username')
        var username = usernameImput.value

        var passwordInput = document.getElementById('password')
        var password = passwordInput.value

        try {
            logic.loginUser(username, password)
            location.href = '../home'
        } catch (error) {
            alert(error.message)
        }
    })
})()