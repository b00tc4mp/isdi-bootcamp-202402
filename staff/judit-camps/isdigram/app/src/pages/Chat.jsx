import utils from '../utils.mjs'
import logic from '../logic.mjs'

import { Component } from 'react'

class Chat extends Component {
    constructor() {
        super()
    }

    render() {
        let userName
        let users
        try {
            const user = logic.getUser()

            users = logic.retrieveUsers()
            userName = user.name
        } catch (error) {
            utils.showFeedback(error)
        }

        const userList = users.map(user => {
            return <li onClick={event => {
                event.preventDefault()

                console.log(user.id)
            }}>{user.username}</li>
        })

        return <main>
            <header>
                <h3>Isdigram</h3>
                <button onClick={event => {
                    event.preventDefault()
                    this.props.onHomeClick()
                }}>Home</button>
            </header>
            <h1>hello, {userName}!</h1>
            <h3>chats</h3>


            <ul className='user-list'>
                {userList}
            </ul>
        </main>
    }
}

export default Chat