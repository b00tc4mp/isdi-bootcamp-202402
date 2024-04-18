import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Register({ onUserRegistered, onLoginClick }) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, birthdate, email, username, password)
                .then(() => {
                    form.reset()

                    onUserRegistered()

                })
                .catch(showFeedback(error.message, 'error'))

        } catch (error) {
            showFeedback(error.message)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    return <main>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">name</label>
            <input type="text" id='name' />

            <label htmlFor="birthdate">birthdate</label>
            <input type="date" id='birthdate' />

            <label htmlFor="email">email</label>
            <input type="email" id='email' />

            <label htmlFor="username">username</label>
            <input type="text" id='username' />

            <label htmlFor="password">password</label>
            <input type="password" id='password' />

            <button>Register</button>

        </form>
        <a href="" onClick={handleLoginClick}>Login</a>
    </main>
}

export default Register

