import { Component } from 'react'

class Login extends Component {
    constructor() {
        super()
    }

    render() {
        return <main>
            <h1>Login</h1>

            <form onSubmit={function (event) {
                event.preventDefault()

                const form = event.target

                const username = form.username.value
                const password = form.password.value

                console.log('login', username, password)
            }}>
                <label htmlFor="username">Username</label>
                <input id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <button className="round-button" type="submit">Login</button>
            </form>

            <a href="" onClick={event => {
                event.preventDefault()

                this.props.onRegisterClick()
            }}>Register</a>
        </main>
    }
}

export default Login