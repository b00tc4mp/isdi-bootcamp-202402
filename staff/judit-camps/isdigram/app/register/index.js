// PRESENTATION

{
    if (logic.isUserLoggedIn())
        location.href = '../home'

    else {
        const form = document.querySelector('form')

        form.addEventListener('submit', function (event) {
            console.log('form submit register')
            // prevent web from reloading itsef when clicking on submit button
            event.preventDefault()

            const nameInput = document.getElementById('name')
            const name = nameInput.value

            const birthdateInput = document.getElementById('birthdate')
            const birthdate = birthdateInput.value

            const emailInput = document.getElementById('email')
            const email = emailInput.value

            const usernameInput = document.getElementById('username')
            const username = usernameInput.value

            const passwordInput = document.getElementById('password')
            const password = passwordInput.value

            try {
                logic.registerUser(name, birthdate, email, username, password)

                form.reset() // clean form

                location.href = '../login'


            } catch (error) {
                showFeedback(error)
            }
        })
    }
}