import utils from "../../utils.mjs";
import logic from "../../logic.mjs";

import { Component } from "react";

class UserChat extends Component {
    constructor(props) {
        super(props)

        try {
            const messages = logic.retrieveMessagesWith(this.props.userToChat.id)
            this.state = {
                messages,
                userToChat: this.props.userToChat
            }
        } catch (error) {
            utils.showFeedback(error)
        }
    }

    componentWillReceiveProps(newProps) {
        console.log(this.props, newProps)

        if (newProps.refreshStamp !== this.props.stamp) {
            try {
                const messages = logic.retrieveMessagesWith(this.props.userToChat.id)

                this.setState({ messages })
            } catch (error) {
                utils.showFeedback()
            }
        }
    }


    render() {
        const { userToChat } = this.state

        return <section>
            <button onClick={() => this.props.onBackToChatsClick()}>back to chats</button>
            <h2>{userToChat.username}</h2>

            <div className="message-div">
                {this.state.messages.map((message) => {
                    let classType
                    if (message.from === logic.getLoggedInUser()) classType = 'message__right'
                    else classType = 'message__left'

                    return <p className={"message " + classType}>{message.text}</p>
                })}

            </div>

            <form className="message-form" onSubmit={event => {
                event.preventDefault()

                const form = event.target

                const message = form.message.value

                try {
                    logic.sendMessageTo(userToChat.id, message)

                    form.reset()
                    this.props.onMessageSent()
                } catch (error) {
                    utils.showFeedback(error)
                }
            }} >
                <input id="message" type="text" />
                <button>send</button>
            </form>

        </section>

    }
}

export default UserChat