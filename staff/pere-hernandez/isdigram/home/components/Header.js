function Header() {
    Component.call(this, 'header')

    var logo = new Logo
    logo.setId('logo')

    var logoutButton = new Button
    logoutButton.setText('Logout')
    logoutButton.setId('logout-button')

    logoutButton.onClick(function (){
        try {
            logic.logoutUser()

            location.href = '../login'
        } catch (error) {
            alert(error.message)
        }
    })

    this.add(logo, logoutButton)
}

Header.prototype = Object.create(Component.prototype)
Header.prototype.constructor = Header