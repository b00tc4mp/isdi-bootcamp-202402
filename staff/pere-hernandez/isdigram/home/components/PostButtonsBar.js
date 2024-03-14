function PostButtonsBar (){
    Component.call(this, 'div')

    var deletePostButton = new Button
    deletePostButton.setText('Delete')
    deletePostButton.setId('delete-post-button')

    var editPostButton = new Button
    editPostButton.setText('Edit')
    editPostButton.setId('edit-post-button')

    this.add(deletePostButton, editPostButton)
}

PostButtonsBar.prototype = Object.create(Component.prototype)
PostButtonsBar.prototype.constructor = PostButtonsBar