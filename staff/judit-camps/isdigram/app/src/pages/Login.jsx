import { logger } from '../utils'
import logic from '../logic'

import { useContext } from '../context'

function Login({ onUserLoggedIn, onRegisterClick }) {
    const { showFeedback } = useContext()

    logger.debug('Login')
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target

        const username = form.username.value
        const password = form.password.value

        logger.debug('Login -> handleSubmit', username, password)

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn()

                })
                .catch(showFeedback(error.message, 'error'))

        } catch (error) {
            showFeedback(error.message)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    return <main id='login'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} >
            <label htmlFor="username">username</label>
            <input type="text" id='username' />

            <label htmlFor="password">password</label>
            <input type="password" id='password' />

            <button>Log in</button>

        </form>
        <a href="" onClick={handleRegisterClick} >Register</a>
    </main>
}

export default Login