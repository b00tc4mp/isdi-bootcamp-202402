function PostForm () {
    Component.call(this, 'form')

    var photoInputLabel = new Label

    var photoInput = new Input
    photoInput.setType('text')
    photoInput.setId('photo-input')
    photoInputLabel.setFor('photo-input')

    var commentInputLabel = new Label

    var commentInput = new Input
    commentInput.setType ('text')
    commentInput.setId('comment-input')
    commentInputLabel.setFor('comment-input')

    var submitPostFormButton = new Button
    submitPostFormButton.setId('submit-post-form-button')

    this.add(photoInputLabel, photoInput, commentInputLabel, commentInput, submitPostFormButton)
}