
function Post(post) {
    Component.call(this, 'article')

    var author = new Component('h3')
    author.setText(post.author.username)

    var picture = new Image
    picture.setSource(post.image)

    var paragraph = new Component('p')
    paragraph.setText(post.text)

    var dateTime = new Component('time')
    dateTime.setText(post.date)

    this.add(author, picture, paragraph, dateTime)

    if (post.author === logic.getUser()) {
        var deletePostButton = new Component('button')
        deletePostButton.setText('...')

        deletePostButton.onClick(function () {
            if (confirm('delete post?'))
                try {
                    logic.removePost(post.id)

                    // TO DO: Render posts
                } catch (error) {
                    console.error(error)

                    alert(error.message)
                }
        })

        var editPostButton = new Component('button')
        editPostButton.setText('edit')

        editPostButton.onClick(function () {
            // TO DO open edit pannel
        })

        this.add(editPostButton, deletePostButton)
    }
}

Post.prototype = Object.create(Component.prototype)
Post.prototype.constructor = Post