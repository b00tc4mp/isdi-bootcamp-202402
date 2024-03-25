import { Component } from 'react'
class Landing extends Component {
    constructor() {
        super()
    }

    render() {
        return <main className='landing-main'>
            <h1 className='landing-title'>App</h1>
            <a className="landing-link" href="" onClick={event => {
                event.preventDefault()

                this.props.onLoginClick()
            }}>Login</a>

            <a className="landing-link" href="" onClick={event => {
                event.preventDefault()

                this.props.onRegisterClick()
            }}>Register</a>
        </main>
    }

    on
}

export default Landing