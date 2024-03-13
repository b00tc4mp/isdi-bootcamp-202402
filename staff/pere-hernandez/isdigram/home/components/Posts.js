function Posts () {
    Component.call(this, 'section')

    try {
        var posts = logic.retrievePosts()
    } catch (error) {
        alert(error.message)
    }

    posts.forEach(function (post){
        var post1 = new Post(post)

        this.add(post1)
    }.bind(this))
}

Posts.prototype = Object.create(Component.prototype)
Posts.prototype.constuctor = Posts