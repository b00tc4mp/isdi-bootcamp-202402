import Component from "../../core/Component.mjs"

import UserList from "./UserList.mjs"
import messageList from "./MessageList.mjs"
import ChatForm from "./ChatForm.mjs"
import MessageList from "./MessageList.mjs"

class Chat extends Component {
    constructor(){
        super('section')

        const userList = new UserList
        userList.setId('user-list-section')

        this._messageList
        let chatForm

        userList.onUserClick(user => {
            this.remove(userList)
            if (!this._messageList) {
                let chatSection = new Component('div')

                let chatTitle = new Component('div')
                chatTitle.setClass('chat-title')
                chatTitle.setText(user.username)

                this._messageList = new messageList(user)
                chatForm = new ChatForm(user)

                chatForm.onSendMessage(() => this._messageList.refresh())

                chatSection.add(chatTitle, this._messageList, chatForm)

                this.add(chatSection)
            } else {
                this._messageList.stopAutoRefresh()

                const oldMessageList = this._messageList
                const oldChatForm = chatForm

                this._messageList = new MessageList(user)
                chatForm = new ChatForm(user)

                chatForm.onSendMessage(() => this._messageList.refresh())

                this.replace(oldMessageList, this._messageList)
                this.replace(oldChatForm, chatForm)
            }
        })
        this.add(userList)
    }
}

export default Chat