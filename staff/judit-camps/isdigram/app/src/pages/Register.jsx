import { logger, showFeedback } from '../utils'

import logic from '../logic.mjs'

import { Component } from 'react'

class Register extends Component {
    constructor() {
        logger.debug('Register')
        super()
    }

    handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            logic.registerUser(name, birthdate, email, username, password)
            form.reset()

            this.props.onUserRegistered()

        } catch (error) {
            utils.showFeedback(error)
        }
    }

    handleLoginClick = event => {
        event.preventDefault()

        this.props.onLoginClick()
    }

    render() {
        return <main>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
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
            <a href="" onClick={this.handleLoginClick}>Login</a>
        </main>
    }
}

export default Register

