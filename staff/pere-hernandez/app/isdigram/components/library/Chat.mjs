import Component from "../core/Component.mjs";

import UserList from "./UserList.mjs";
import MessageList from "./MessageList.mjs";
import CreateMessage from "./CreateMessage.mjs";

class Chat extends Component {
    constructor() {
        super('section')

        this.setId('chat-section')

        const userList = new UserList
        let chatTitle
        this._messageList
        let messageForm

        userList.onUserClick(user => {
            this.remove(userList)

            if(!chatTitle){
                chatTitle = new Component ('h3')
                chatTitle.setClass('chat-title')
                this.add(chatTitle)
            }

            chatTitle.setText(user.username)

            if(!this._messageList) {
                this._messageList = new MessageList(user)
                messageForm = new CreateMessage(user)

                messageForm.onMessageSent(() => this._messageList.refresh())

                this.add(this._messageList, messageForm)
            } else {
                const oldMessageList = this._messageList
                const oldMessageForm = messageForm

                this._messageList = new MessageList(user)
                messageForm = new CreateMessage(user)

                messageForm.onMessageSent(() => this._messageList.refresh())

                this.replace(oldMessageList, this._messageList)
                this.replace(oldMessageForm, messageForm)
            }
        })

        this.add(userList)

        Chat.active = true
    }
    
    static set active(status){
        MessageList.active = status
    }
}

export default Chat