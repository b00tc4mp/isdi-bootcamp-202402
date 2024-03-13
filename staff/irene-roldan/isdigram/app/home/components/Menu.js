function Menu(){
    Component.call(this, 'nav')

    var chatButton = new Component('button')
    chatButton.setText('💬')

    var exitButton = new Component('button')
    exitButton.setText('🔙')

    exitButton.onClick(function(){
        logic.logoutUser()

        location.href = '../login'
    })

    this.add(chatButton, exitButton)
}

Menu.prototype = Object.create(Component.prototype)
Menu.prototype.constructor = Menu
