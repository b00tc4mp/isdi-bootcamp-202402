import logic from "../../logic.mjs"
import utils from "../../utils.mjs"

import Component from "../../core/Component.mjs"

import Image from "../../core/Image.mjs"
import Button from "../../core/Button.mjs"
import EditPost from "./EditPost.mjs"


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

        if (post.author.id === logic.getLoggedInUser()) {
            const deletePostButton = new Button
            deletePostButton.setText('...')

            deletePostButton.onClick(() => {
                if (confirm('delete post?'))
                    try {
                        logic.removePost(post.id)

                        this._onDeletedCallback()
                    } catch (error) {
                        utils.showFeedback(error)
                    }
            })

            const editPostButton = new Button
            editPostButton.setText('edit')

            editPostButton.onClick(() => {
                if (!EditPost.active) {
                    const editPost = new EditPost(post)

                    editPost.onCancelClick(() => this.remove(editPost))

                    editPost.onPostEdited(() => this._onEditedCallback())

                    this.add(editPost)
                }

            })

            caption.add(editPostButton, deletePostButton)

        }

        this.add(author, picture, caption, dateTime)

        this._onDeletedCallback = null
        this._onEditedCallback = null
    }
    onDeleted(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onDeletedCallback = callback
    }

    onEdited(callback) {
        if (typeof callback !== 'function') throw new TypeError('callback is not a function')

        this._onEditedCallback = callback
    }


}

export default Post