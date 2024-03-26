import { logger } from '../utils'

import { Component } from 'react'

class Landing extends Component {
    constructor() {
        logger.debug('Landing')

        super()
    }

    render() {
        logger.debug('Landing -> render')

        return <main>
            <h1>Landing</h1>

            <a href="" onClick={event => {
                event.preventDefault()

                this.props.onLoginClick()
            }}>Login</a> or <a href="" onClick={event => {
                event.preventDefault()

                this.props.onRegisterClick()
            }}>Register</a>
        </main>
    }
}

export default Landing