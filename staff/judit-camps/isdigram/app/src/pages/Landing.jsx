import { logger } from '../utils'

import { Component } from 'react'

class Landing extends Component {
    constructor() {
        logger.debug('Landing')
        super()
    }

    handleLoginClick = (event) => {
        event.preventDefault()

        this.props.onLoginClick()
    }

    handleRegisterClick = (event) => {
        event.preventDefault()

        this.props.onRegisterClick()
    }

    render() {
        logger.debug('Landing -> render')

        return <main className='landing-main'>
            <h1 className='landing-title'>App</h1>

            <a className="landing-link" href="" onClick={this.handleLoginClick}>Login</a>

            <a className="landing-link" href="" onClick={this.handleRegisterClick}>Register</a>
        </main>
    }

    on
}

export default Landing