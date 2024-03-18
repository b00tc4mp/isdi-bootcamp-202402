import Component from "../../core/Component.mjs";

import logic from "../../logic.mjs";

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

                    const chatTitle = new Component ('div')
                    chatTitle.setClass('chat-title')
                    chatTitle.setText(user.username)

                    chat.add(chatTitle)

                    this.add(chat)
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