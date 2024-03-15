import logic from "../../logic.mjs"

import Component from "../../core/Component.mjs"
import Post from "./Post.mjs"

class Posts extends Component {
    constructor() {
        super('section')

        const posts = logic.retrievePostsLatestFirst()

        posts.forEach((post) => {
            let post2 = new Post(post)

            this.add(post2)
        })
    }
}

export default Posts