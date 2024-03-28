/*
import React from 'react'
const Component = React.Component
*/

import { Component } from "react"
import './Index.css'


class Landing extends Component  {
    constructor(){
        super()
    }

    render() {
        return <main>
            <h1>Welcome to Isdigram!</h1>
            <p>Where do you want to go?</p>
            
            <a onClick ={event => {
                event.preventDefault()

                this.props.onLoginClick()
            }}>Login</a> or <a href="" onClick = {event =>{
                event.preventDefault()

                this.props.onRegisterClick()
            }}>Register</a>
            
        </main>
        
    }
}
export default Landing