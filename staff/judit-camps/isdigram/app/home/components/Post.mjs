import logic from "../../logic.mjs"
import utils from "../../utils.mjs"

import Component from "../../core/Component.mjs"

import Image from "../../core/Image.mjs"
import Button from "../../core/Button.mjs"


class Post extends Component {
    constructor(post) {
        super('article')

        const author = new Component('h3')
        author.setText(post.author.username)

        const picture = new Image
        picture.setSource(post.image)

        const caption = new Component('div')

        const paragraph = new Component('p')
        paragraph.setText(post.caption)
        caption.add(paragraph)

        const dateTime = new Component('time')
        dateTime.setText(post.date)

        if (post.author === logic.getLoggedInUser()) {
            const deletePostButton = new Button
            deletePostButton.setText('...')

            deletePostButton.onClick(function () {
                if (confirm('delete post?'))
                    try {
                        logic.removePost(post.id)

                        // TO DO: Render posts
                    } catch (error) {
                        utils.showFeedback(error)
                    }
            })

            const editPostButton = new Button
            editPostButton.setText('edit')

            editPostButton.onClick(function () {
                // TO DO open edit pannel
            })

            caption.add(editPostButton, deletePostButton)

        }

        this.add(author, picture, caption, dateTime)
    }
}

export default Post