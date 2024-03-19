import Component from "../../core/Component.mjs"

import Button from "../../core/Button.mjs"
import Image from "../../core/Image.mjs"

class Menu extends Component {
    constructor(){
        super('nav')

        const homeButton = new Button
        homeButton.setId('home-icon-button')

        this._homeButton = homeButton

        const homeImage = new Image
        homeImage.setSource('../home.png')

        homeButton.add(homeImage)

        const chatButton = new Button
        chatButton.setId('chat-icon-button')

        this._chatbutton = chatButton

        const chatImage = new Image
        chatImage.setSource('../chat.svg')

        chatButton.add(chatImage)

        this.add(chatButton)
    }
    
    onChatClick(callback){
        //validation

        if(typeof callback !== 'function')
            throw new TypeError('callback is not a function')

        //logic

        this._chatbutton.onClick(() => {
            this.replace(this._chatbutton, this._homeButton)

            callback()
        })
    }

    onHomeClick(callback) {
        //validation

        if(typeof callback !== 'function')
            throw new TypeError('callback is not a function')

        //logic

        this._homeButton.onClick(() => {
            this.replace(this._homeButton, this._chatbutton)

            callback()
        })
    }
}

export default Menu