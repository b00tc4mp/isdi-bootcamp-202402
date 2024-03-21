import Component from "../../core/Component.mjs";

import logic from "../../logic.mjs";

class MessageList extends Component {
    constructor(user){
        super('ul')

        this._userId = user.id

        this.setClass('message-section')

        this.refresh()

        this._refreshIntervalId = setInterval(() => 
            this.refresh(), 1000)
        }

        refresh() {
            this.removeAll()

            try{
                const messages = logic.retrieveMessagesWith(this._userId)

                messages.forEach(message => {
                    const messageP = new Component ('li')
                    messageP.setText(message.text)

                    if (message.author === logic.getLoggedInUserId())
                        messageP.setClass('chat-message-sent')
                    else 
                        messageP.setClass('chat-message-recieved')

                    this.add(messageP)
                })
            } catch (error) {
                alert(error.message)
            }
        }

        stopAutoRefresh() {
            clearInterval(this._refreshIntervalId)
        }
    }

export default MessageList
