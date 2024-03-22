import { Component } from 'react'

class Register extends Component {
    constructor() {
        super()
    }

    render() {
        return <main>
            <h1>Register</h1>

            <form onSubmit={function (event) {
                event.preventDefault()

                const form = event.target

                const name = form.name.value
                const birthdate = form.birthdate.value
                const email = form.email.value
                const username = form.username.value
                const password = form.password.value

                console.log('register', name, birthdate, email, username, password)
            }}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />

                <label htmlFor="birthdate">Age</label>
                <input type="date" id="birthdate" />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" />

                <label htmlFor="username">Username</label>
                <input id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <button className="round-button" type="submit">Register</button>
            </form>

            <a href="" onClick={event => {
                event.preventDefault()

                this.props.onLoginClick()
            }}>Login</a>
        </main>
    }
}

export default Register