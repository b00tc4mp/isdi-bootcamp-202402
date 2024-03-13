function Footer (){
    Component.call(this, 'footer')

    var createPostButton = new Button
    createPostButton.setId('create-post-button')

    var createPostImage = new Image
    createPostImage.setSource('../add-circle-fill-system.256x256.png')
    createPostImage.setId('create-post-img')

    createPostButton.add(createPostImage)

    this.add(createPostButton)
}

Footer.prototype = Object.create(Component.prototype)
Footer.prototype.constructor = Footer