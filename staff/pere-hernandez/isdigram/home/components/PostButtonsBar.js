function PostButtonsBar (){
    Component.call(this, 'div')

    var deletePostButton = new Button
    deletePostButton.setText('Delete')

    var editPostButton = new Button
    editPostButton.setText('Edit')

    this.add(deletePostButton, editPostButton)
}

PostButtonsBar.prototype = Object.create(Component.prototype)
PostButtonsBar.prototype.constructor = PostButtonsBar