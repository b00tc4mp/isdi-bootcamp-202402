
class Post extends Component {
    constructor(post) {
        super('article')

        const author = new Component('h3')
        author.setText(post.author.username)

        const picture = new Image
        picture.setSource(post.image)

        const paragraph = new Component('p')
        paragraph.setText(post.text)

        const dateTime = new Component('time')
        dateTime.setText(post.date)

        this.add(author, picture, paragraph, dateTime)

        if (post.author === logic.getUser()) {
            const deletePostButton = new Component('button')
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

            const editPostButton = new Component('button')
            editPostButton.setText('edit')

            editPostButton.onClick(function () {
                // TO DO open edit pannel
            })

            this.add(editPostButton, deletePostButton)
        }
    }

}