import Form from "../../core/Form.mjs"

import Input from "../../core/Input.mjs";
import Button from "../../core/Button.mjs";
import Image from "../../core/Image.mjs";

import logic from "../../logic.mjs";

class ChatForm extends Form {
    constructor(user){
        super()

        this.setClass('chat-form')

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

        this.onSubmit(event => {
            event.preventDefault()

            let chatWith = logic.retrieveChatWith(user.id)

            if (!chatWith)
                chatWith = logic.createChat(user)

                const messageValue = input.getValue()

                const newMessage = logic.createMessage(messageValue)

            try {
                logic.addMessageToChat(newMessage, chatWith.id)

                this.reset()

                this._onSendMessageCallback()
            } catch (error) {
                alert(error.message)
            }
        })

        this.add(input, sendMessageButton)

        this.onSendMessageCallback = null
    }

    onSendMessage(callback){
        //validation

        if (typeof callback !== 'function')
            throw new TypeError('callback is not a Function')

        //logic

        this._onSendMessageCallback = callback
    }
}

export default ChatForm