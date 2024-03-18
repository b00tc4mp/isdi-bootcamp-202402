import Collection from "../../data/Collection.mjs"

import Button from "../../core/Button.mjs"
import Component from "../../core/Component.mjs"
import logic from "../../logic.mjs"

class PostButtonsBar extends Component {
    constructor(){
        super('div')
        const deletePostButton = new Button
        deletePostButton.setText('Delete')
        deletePostButton.setId('delete-post-button')
        this._deletePostButton = deletePostButton

        const editPostButton = new Button
        editPostButton.setText('Edit')
        editPostButton.setId('edit-post-button')
        this._editPostButton = editPostButton

        this.add(deletePostButton, editPostButton)
    }

    postDeleteOnClick (postId) {
        // validation

        if (typeof postId !== 'string')
            throw new TypeError ('postId is not a string')

        //logic
        this._deletePostButton.onClick(() => {
            if(confirm('Delete post?'))
            try {
                logic.deletePost(postId)
            } catch (error) {
                alert(error.message)
            }
        })
        
        this._onDeletedCallback = null
    }

    onDeletedPost(callback) {
        //validation
        if(!typeof callback !== 'function')
            throw new TypeError('callback is not a function')
    }
}

export default PostButtonsBar