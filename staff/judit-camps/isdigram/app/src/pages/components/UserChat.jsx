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

            <form className="message-form" action="">
                <input type="text" />
                <button>send</button>
            </form>

        </section>

    }
}

export default UserChat