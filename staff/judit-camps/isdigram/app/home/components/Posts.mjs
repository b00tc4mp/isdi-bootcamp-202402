import logic from "../../logic.mjs"

import Component from "../../core/Component.mjs"
import Post from "./Post.mjs"
import utils from "../../utils.mjs"

class Posts extends Component {
    constructor() {
        super('section')

        this.refresh()

    }
    refresh() {
        try {
            const posts = logic.retrievePostsLatestFirst()

            this.removeAll()

            posts.forEach((post) => {
                let post2 = new Post(post)

                this.add(post2)
            })
        } catch (error) {
            utils.showFeedback(error)
        }
    }
}

export default Posts