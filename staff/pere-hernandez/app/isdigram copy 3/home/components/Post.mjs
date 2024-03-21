import Component from "../../core/Component.mjs"

import logic from "../../logic.mjs"

import Image from "../../core/Image.mjs"
import Button from "../../core/Button.mjs"

class Post extends Component {
    constructor(post){
        super('article')

        const author = new Component('h3')
        author.setText(post.author.username)

        const photo = new Image
        photo.setSource(post.photo)

        const photoDiv = new Component('div')
        photoDiv.setId('photo-div')

        photoDiv.add(photo)

        const comment = new Component('p')
        comment.setText(post.comment)

        const date = new Component('time')
        date.setText(post.date)

        this.add(author, photoDiv, comment, date)

        if (post.author.id === logic.getLoggedInUserId()){
            const postButtonsBar = new Component ('div')
            postButtonsBar.setId('post-buttons-bar')

            const deleteButton = new Button
            deleteButton.setClass('delete-post-button')
            deleteButton.setText('Delete')

            deleteButton.onClick(() => {
                if(confirm('Do you want to delete this post?'))
                    try {
                        logic.deletePost(post.id)

                        this._onDeleteCallback()
                    } catch (error) {
                        alert(error.message)
                    }
            })

            const updateButton = new Button
            updateButton.setClass('update-post-button')
            updateButton.setText('Edit')

            postButtonsBar.add(deleteButton, updateButton)

            this.add(postButtonsBar)
        }

        this._onDeleteCallback = null
    }

    onDeleted(callback){
        //validation

        if(typeof callback !== 'function')
            throw new TypeError('callback is not a Function')

            this._onDeleteCallback = callback
    }
}

export default Post