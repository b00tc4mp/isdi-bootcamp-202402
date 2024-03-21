import Component from "./core/Component.mjs";
import logic from "../logic.mjs";
import utils from "../utils.mjs";

class MessageList extends Component {
    constructor(userId) {
        super('ul')

        this._userId = userId

        this.addClass('message-list')

        this.refresh()

    }

    refresh() {
        this.removeAll()

        try {
            const messages = logic.retrieveMessagesWith(this._userId)

            messages.forEach(message => {
                const messageItem = new Component('li')
                messageItem.setText(message.text)

                if (message.from === logic.getLoggedInUser())
                    messageItem.addClass('message-list__item--right')
                else
                    messageItem.addClass('message-list__item--left')


                this.add(messageItem)
            })
        } catch (error) {
            utils.showFeedback(error)
        }
    }
}

export default MessageList