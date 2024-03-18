import Component from "../../core/Component.mjs"

import logic from "../../logic.mjs"

import Image from "../../core/Image.mjs"
import PostButtonsBar from "./PostButtonsBar.mjs"

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
            const postButtonsBar = new PostButtonsBar
            postButtonsBar.setId('post-buttons-bar')

            postButtonsBar.postDeleteOnClick(post.id)

            this.add(postButtonsBar)
        }
    }
}

export default Post