import { Component } from 'react'
class Landing extends Component {
    constructor() {
        super()
    }

    render() {
        return <main>
            <h1>App</h1>
            <a href="" onClick={event => {
                event.preventDefault()

                this.props.onLoginClick()
            }}>Login</a>

            <a href="" onClick={event => {
                event.preventDefault()

                this.props.onRegisterClick()
            }}>Register</a>
        </main>
    }

    on
}

export default Landing