import { logger, showFeedback } from '../utils/index.mjs'

import logic from '../logic.mjs'

import { Component } from 'react'

import UserChat from '../components/UserChat'
class Chat extends Component {
    constructor() {
        super()

        try {
            const user = logic.getUser()
            this.user = user

            const users = logic.retrieveUsers()
            this.state = {
                users,
                viewUsers: true,
                viewMessageWithUser: null,
                selectedUser: null,
                stamp: null
            }
        } catch (error) {
            showFeedback(error)
        }
    }


    render() {
        return <main >
            <header>
                <h3>Isdigram</h3>
                <button onClick={event => {
                    event.preventDefault()
                    this.props.onHomeClick()
                }}>Home</button>
            </header>
            <h1 className='chats-title'>hello, {this.user.name}!</h1>


            {this.state.viewUsers && (<ul className='user-list'>
                <h2>chats</h2>
                {this.state.users.map(user => {
                    let classStatus
                    if (user.status === 'online')
                        classStatus = ' user-list__item--online'
                    else
                        classStatus = ' user-list__item--offline'

                    return <li key={user.id} className={'user-list__item' + classStatus} onClick={() => {
                        console.log(user.username, user.id)
                        this.setState({ viewUsers: null, viewMessageWithUser: true, selectedUser: user })

                    }}>{user.username}</li>
                })}
            </ul>)
            }

            {this.state.viewMessageWithUser && (
                <UserChat userToChat={this.state.selectedUser}
                    onBackToChatsClick={() => this.setState({ viewUsers: true, viewMessageWithUser: false })}
                    onMessageSent={() => this.setState({ stamp: Date.now() })}
                    refreshStamp={this.state.stamp} />)}
        </main>
    }
}

export default Chat