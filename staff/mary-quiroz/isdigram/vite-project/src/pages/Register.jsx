import { logger, showFeedback } from '../utils'

import logic from '../logic'

import { Component } from 'react'

class Register extends Component {
    constructor() {
        logger.debug('Register')

        super()
    }

    handleSubmit = event =>{
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const birthdate = form.birthdate.value
        const email = form .email.value
        const ussername = form.ussername.value
        const password = form.password.value

        try{
            logic.registerUSer(name, birthdate, email, ussername, password)

            form.reset()

            this.props.onUserRegistered()

        }catch(error){
            showFeedback(error)
        }
        
    }

    handleLoginClick = event => {
        event.preventDeFault()

        this.props.onLoginClick()
    }

    render(){
        logger.debug('Register -> render')

        return <main>
            <h1>Register</h1>

            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name'/>

                <label htmlFor='birthdate'>birthdate</label>
                <input type='date' id='email'/>

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email'/>

                <label htmlFor="username"></label>
                <input id="username"/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" />

                <button className='round-button' type='submit'>Register</button>
            </form>

            <a href="" onClick={this.handleLoginClick}>Login</a>
        </main>
    }
}

export default Register