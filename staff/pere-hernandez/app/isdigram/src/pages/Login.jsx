import logic from "../logic.mjs";

import { Component } from "react";

class Login extends Component {
    constructor(){
        super()
    }

    render() {
        return <main>
            <img id="login-logo-img" src="../../logo.png"></img>

            <h1 className="title">Isdigram.</h1>

            <form id="login-form" onSubmit={event => {
                event.preventDefault()

                const form = event.target

                const username = form.username.value
                const password = form.password.value

                try {
                    logic.loginUser(username, password)

                    form.reset()

                    this.props.onUserLoggedIn()
                } catch (error) {
                    alert(error.message)
                }
            }}>
                <label htmlFor="username">Write your username here</label>
                <input id="username" type="text"></input>

                <label htmlFor="password">Write your password here</label>
                <input id="password" type="password"></input>

                <button type="submit" className="submit-button">Log In</button>
            </form>

            <button className="secondary-button" onClick={event => {
                event.preventDefault()

                this.props.onRegisterClick()
            }}>Register</button>
        </main>
    }
}

export default Login