import utils from '../utils.mjs'
import logic from '../logic.mjs'

import { Component } from 'react'

import UserChat from './UserChat'

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
            let classStatus
            if (user.status === 'online')
                classStatus = ' user-list__item--online'
            else
                classStatus = ' user-list__item--offline'

            return <li className={'user-list__item' + classStatus} onClick={event => {
                event.preventDefault()

                console.log(user.username, user.id)

                return (<div>
                    < UserChat user />
                </div>)
                // this.state.onUserChatClick(user)
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