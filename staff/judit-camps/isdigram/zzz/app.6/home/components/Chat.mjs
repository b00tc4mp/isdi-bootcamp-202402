import Component from "../../core/Component.mjs"
import Button from "../../core/Button.mjs"
import UserList from "./UserList.mjs"
import MessageList from "./MessageList.mjs"
import SendMessageForm from "./SendMessageForm.mjs"

class Chat extends Component {
    constructor() {
        super('section')

        const userList = new UserList

        this._messageList
        let sendMessageForm

        userList.onUserClick(user => {

            this._userId = user.id
            this._username = user.username

            const messageSection = new Component('div')
            const backButton = new Button
            backButton.setText('back to chats')

            const messageTitle = new Component('h3')
            messageTitle.setText(this._username)

            this._messageList = new MessageList(this._userId)

            sendMessageForm = new SendMessageForm(user)

            sendMessageForm.onMessageSent(() => this._messageList.refresh())

            this.remove(userList)


            backButton.onClick(() => {
                this.add(userList)
                this.remove(messageSection)
                this._messageList = null
            })

            messageSection.add(backButton, messageTitle, this._messageList, sendMessageForm)

            this.add(messageSection)
        })

        this.add(userList)
    }
}

export default Chat