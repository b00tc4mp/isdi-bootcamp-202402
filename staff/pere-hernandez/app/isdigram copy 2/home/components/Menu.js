function Menu (){
    Component.call(this, 'nav')

    var chatButton = new Button
    chatButton.setId('chat-icon-button')

    var chatImage = new Image
    chatImage.setSource('../chat.svg')

    chatButton.add(chatImage)

    this.add(chatButton)
}

Menu.prototype = Object.create(Component.prototype)
Menu.prototype.constructor = Menu