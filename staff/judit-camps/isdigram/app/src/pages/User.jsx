import utils from "../utils.mjs"
import logic from "../logic.mjs"

import { Component } from "react"

class User extends Component {
    constructor() {
        super()
    }

    render() {
        let user
        try {
            user = logic.getUser()
        } catch (error) {
            utils.showFeedback(error)
        }

        return <main id="user-page">
            <header>
                <h3>Isdigram</h3>
                <button>Chat</button>

            </header>
            <h1>hello, {user.name}!</h1>
            <button>Change password</button>
            <button onClick={event => {
                event.preventDefault()

                logic.logoutUser()

                this.props.onLogoutClick()
            }}>Log out</button>

            <footer className="footer">
                <button onClick={event => {
                    event.preventDefault()

                    this.props.onHomeClick()
                }}>home</button>
                <button>+</button>
                <button>user</button>

            </footer>
        </main>
    }
}

export default User