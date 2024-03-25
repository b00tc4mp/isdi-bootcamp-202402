import { Component } from 'react'

class Landing extends Component{
    constructor(){
        super()
    }

    render(){
        return <main>
            <img src='../../logo.png' id='landing-img'></img>

            <h1>Welcome to Isdigram.</h1>

            <button className='landing-button' onClick={event => {
                event.preventDefault()

                this.props.onLoginClick()
            }}>Log In</button>

            <button className='landing-button' onClick={event => {
                event.preventDefault()

                this.props.onRegisterClick()
            }}>Register</button>
        </main>
    }
}

export default Landing