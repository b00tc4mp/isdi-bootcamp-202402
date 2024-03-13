function Logo() {
    Component.call(this, 'div')
    
    var logoImg = new Image
    logoImg.setSource('../logo.png')
    logoImg.setId('logo-img')

    var logoTitle = new Component('h1')
    logoTitle.setText('Isdigram.')
    logoTitle.setId('logo-title')

    this.add(logoImg, logoTitle)
}

Logo.prototype = Object.create(Component.prototype)
Logo.prototype.constructor = Logo