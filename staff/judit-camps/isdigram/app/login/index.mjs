import logic from "../logic.mjs"

if (logic.isUserLoggedIn())
    location.href = '../home'
else {
    const form = document.querySelector('form')

    form.addEventListener('submit', function (event) {
        console.log('form submit login')

        event.preventDefault()

        const usernameInput = document.getElementById('username')
        const username = usernameInput.value

        const passwordInput = document.getElementById('password')
        const password = passwordInput.value

        try {
            logic.loginUser(username, password)

            form.reset()
            const homeAddress = location.href.replace('login', 'home')
            location.href = homeAddress
        } catch (error) {
            showFeedback(error)
        }
    })
}