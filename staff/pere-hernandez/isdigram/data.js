// data

var data = (function () {
    function findUser(callback) {
        var users = JSON.parse(localStorage.users || '[]')

        var user = users.find(callback)

        return user
    }


    function insertUser(user) {
        var users = JSON.parse(localStorage.users || '[]')

        users.push(user)

        localStorage.users = JSON.stringify(users)
    }


    function insertPost(post) {
        var posts = JSON.parse(localStorage.posts || '[]')

        posts.push(post)

        localStorage.posts = JSON.stringify(posts)
    }


    /*function deleteUser(user) {
        var users = JSON.parse(localStorage.users)

        var result = users.filter(function (x){
            x.username !== user.username
        })

        localStorage.users = JSON.stringify(result)
    }*/


    function getAllPosts(){
        var posts = JSON.parse(localStorage.posts || '[')

        return posts
    }


    function getPostId () {
        var postCount = JSON.parse(localStorage.postCount || '-1')

        postCount++

        localStorage.postCount = JSON.stringify(postCount)

        return postCount
    }


    function deletePost (post) {
        var posts = JSON.parse(localStorage.posts || '[]')

        var index = posts.findIndex(function (x) {
            return parseInt(x.id) === post.id
        })

        posts.splice(index, 1)

        localStorage.posts = JSON.stringify(posts)
    }


    return {
        findUser: findUser,
        insertUser: insertUser,
        insertPost: insertPost,
        getAllPosts: getAllPosts,
        getPostId: getPostId,
        deletePost: deletePost
    }
    
})()

