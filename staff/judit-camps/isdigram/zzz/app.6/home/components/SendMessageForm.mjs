import utils from "../../utils.mjs";

import logic from "../../logic.mjs";
import Button from "../../core/Button.mjs";
import Form from "../../core/Form.mjs";
import Input from "../../core/Input.mjs";

class SendMessageForm extends Form {
    constructor(user) {
        super()

        const textInput = new Input
        textInput.setId('send-message-form__text')

        const sendButton = new Button
        sendButton.setText('send')
        sendButton.setType('submit')
        sendButton.setId('send-message-form__button')

        this.setId('send-message-form')

        this.onSubmit((event) => {
            event.preventDefault()

            const text = textInput.getValue()

            try {
                logic.sendMessageTo(user.id, text)

                this.reset()

                this._onMessageSentCallback()
            } catch (error) {
                utils.showFeedback(error)
            }
        })

        this.add(textInput, sendButton)

        this._onMessageSentCallback = null
    }

    onMessageSent(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onMessageSentCallback = callback
    }
}

export default SendMessageForm




