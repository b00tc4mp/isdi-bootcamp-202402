import logic from "../logic.mjs"

    if (logic.checkLoggedInStatus()){
        location.href = '../home'
    } else {
        const form = document.querySelector('form')

        form.addEventListener('submit', function (event){
        event.preventDefault()

        const usernameImput = document.getElementById('username')
        const username = usernameImput.value

        const passwordInput = document.getElementById('password')
        const password = passwordInput.value

        try {
            logic.loginUser(username, password)
            location.href = '../home'
        } catch (error) {
            alert(error.message)
        }
    })
}