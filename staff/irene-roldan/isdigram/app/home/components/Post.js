function Post (post) {
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

    if (post.author.id === logic.getLoggedInUser()) {
        var deleteButton = new Component('button')
        deleteButton.setText('🗑')

        deleteButton.onClick(function () {
            if (confirm('delete post?')) {
                try {
                    logic.removePost(post.id)

                } catch (error) {
                    console.error(error)

                    alert(error.message)
                }
            }
        })

        var editButton = new Component ('button')
        editButton.setText('🔧')
        
        editButton.onClick(function () {
            
        })
        this.add(deleteButton, editButton)
    }
}

Post.prototype = Object.create(Component.prototype)
Post.prototype.constructor = Post