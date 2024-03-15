function PostFormSection () {
    Component.call(this, 'section')

    var postForm = new PostForm

    var returnButton = new Button
    returnButton.setId('return')

    this.add(postForm, returnButton)
}

PostFormSection.prototype = Object.create(Collection.prototype)
PostFormSection.prototype.constructor = PostFormSection