import Component from "../../core/Component.mjs";

import logic from "../../logic.mjs";

import Input from "../../core/Input.mjs"
import Form from "../../core/Form.mjs";
import Button from "../../core/Button.mjs"
import Image from "../../core/Image.mjs"

class Chat extends Component {
    constructor(){
        super('section')

        const userList = new Component('ul')

        try {
            const users = logic.retrieveUsers()

            let chat = null

            users.forEach(user => {
                const userLi = new Component ('li')

                userLi.setText(user.username)

                if (user.status === 'online')
                    userLi.setClass('user-list-online')
                else
                userLi.setClass('user-list-offline')

                userLi.onClick(() => {
                    if (chat) this.remove(chat)

                    chat = new Component('section')
                    chat.setId('chat-section')

                    this.remove(userList)
                    const chatTitle = new Component ('div')
                    chatTitle.setClass('chat-title')
                    chatTitle.setText(user.username)

                    const messageSection = new Component ('section')
                    messageSection.setClass('message-section')

                    function renderMessages(){
                        messageSection.removeAll()

                        try {
                            const messages = logic.retrieveMessagesWith(user.id)

                            messages.forEach(message => {
                                const messageP = new Component ('p')

                                messageP.setText(message.text)

                                if (message.author === logic.getLoggedInUserId())
                                    messageP.setClass('chat-message-sent')
                                else 
                                    messageP.setClass('chat-message-recieved')

                                messageSection.add(messageP)
                            })
                        } catch (error) {
                            alert(error.message)
                        }
                    }

                    renderMessages.call(this)

                    chat.add(chatTitle, messageSection)

                    this.add(chat)

                    const chatForm = new Form
                    chatForm.setClass('chat-form')

                    chatForm.onSubmit(event => {
                        event.preventDefault()

                        let chatWith = logic.retrieveChatWith(user.id)

                        if (!chatWith)
                            chatWith = logic.createChat(user)

                            const messageValue = input.getValue()

                            const newMessage = logic.createMessage(messageValue)

                        try {
                            logic.addMessageToChat(newMessage, chatWith.id)

                            chatForm.reset()

                            renderMessages.call(this)
                        } catch (error) {
                            alert(error.message)
                        }
                    })

                    const input = new Input
                    input.setId('chat-text-input')
                    input.setType('text')

                    const sendMessageButton = new Button
                    sendMessageButton.setClass('send-message-button')
                    sendMessageButton.setType('submit')

                    const sendMessageImg = new Image
                    sendMessageImg.setSource('../mail.png')
                    sendMessageImg.setClass('message-icon')

                    sendMessageButton.add(sendMessageImg)

                    chatForm.add(input, sendMessageButton)

                    chat.add(chatForm)

                })

                userList.add(userLi)
            })  
        } catch (error){
            alert(error.message)
        }
        this.add(userList)
    }
}

export default Chat