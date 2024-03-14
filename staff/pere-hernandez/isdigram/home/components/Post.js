function Post (post){
    Component.call(this, 'article')

    var author = new Component('h3')
    author.setText(post.author.username)

    var photo = new Image
    photo.setSource(post.photo)

    var photoDiv = new Component('div')
    photoDiv.setId('photo-div')

    photoDiv.add(photo)

    var comment = new Component('p')
    comment.setText(post.comment)

    var date = new Component('time')
    date.setText(post.date)

    this.add(author, photoDiv, comment, date)

    if (post.author.id === logic.getLoggedInUserId()){
        var postButtonsBar = new PostButtonsBar
        postButtonsBar.setId('post-buttons-bar')

        this.add(postButtonsBar)
    }
}

Post.prototype = Object.create(Component.prototype)
Post.prototype.constructor = Post