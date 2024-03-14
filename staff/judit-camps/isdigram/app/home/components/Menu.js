function Menu() {
    Component.call(this, 'nav')

    var chatButton = new Button
    chatButton.setText('chat')

    var exitButton = new Button
    exitButton.setText('log out')

    exitButton.onClick(function () {
        logic.logoutUser()

        location.href = '../login'
    })
    this.add(chatButton, exitButton)
}

Menu.prototype = Object.create(Component.prototype)
Menu.prototype.constructor = Menu
