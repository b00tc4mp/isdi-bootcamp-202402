import Component from "../../core/Component.mjs"
import logic from "../../logic.mjs"
import utils from "../../utils.mjs"
import Button from "../../core/Button.mjs"
import Form from "../../core/Form.mjs"
import Input from "../../core/Input.mjs"

class Chat extends Component {
    constructor() {
        super('section')

        const userList = new Component('ul')

        try {
            const users = logic.retrieveUsers()

            let chat = null

            users.forEach(user => {
                const userItem = new Component('li')

                userItem.setText(user.username)
                if (user.status === 'online')
                    userItem.addClass('user-list__item--online')
                else
                    userItem.addClass('user-list__item--offline')


                // click user
                userItem.onClick(() => {
                    if (chat) this.remove(chat)
                    chat = new Component('div')
                    chat.addClass('chat-div')

                    const usernameTitle = new Component('h3')
                    usernameTitle.setText(user.username)

                    const messageList = new Component('div')
                    messageList.addClass('message-list')

                    function renderMessages() {
                        messageList.removeAll()

                        try {
                            const messages = logic.retrieveMessagesWith(user.id)

                            messages.forEach(message => {
                                const messageItem = new Component('p')
                                messageItem.setText(message.text)

                                if (message.from === logic.getLoggedInUser())
                                    messageItem.addClass('message-list__item--right')
                                else
                                    messageItem.addClass('message-list__item--left')

                                messageList.add(messageItem)
                            })
                        } catch (error) {
                            utils.showFeedback(error)
                        }
                    }

                    renderMessages.call(this)

                    chat.add(usernameTitle, messageList)

                    this.add(chat)

                    const backToChatsButton = new Button
                    backToChatsButton.setText('back to chats')
                    backToChatsButton.onClick(() => {
                        this.add(userList)
                        this.remove(backToChatsButton)
                        this.remove(chat)
                        chat = null
                    })
                    this.remove(userList)
                    this.add(backToChatsButton, chat)

                    const sendMessageForm = new Form
                    const textInput = new Input
                    textInput.setId('text')
                    const sendButton = new Button
                    sendButton.setText('send')
                    sendButton.setType('submit')

                    sendMessageForm.add(textInput, sendButton)

                    sendMessageForm.onSubmit(event => {
                        event.preventDefault()

                        const text = textInput.getValue()

                        try {
                            logic.sendMessageTo(user.id, text)

                            sendMessageForm.reset()
                            renderMessages.call(this)
                        } catch (error) {
                            utils.showFeedback(error)
                        }
                    })

                    chat.add(sendMessageForm)
                })

                userList.add(userItem)
            })

            this.add(userList)

        } catch (error) {
            utils.showFeedback(error)
        }
    }
}

export default Chat