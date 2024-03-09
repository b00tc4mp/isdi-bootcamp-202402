// DATA
var data = (function () {
    // helper

    function generateId() {
        return (+((parseInt(Math.random() * 10 ** 17)).toString())).toString(16)
    }

    function loadUsers() {
        return JSON.parse(localStorage.users || '[]')
    }

    function loadPosts() {
        return JSON.parse(localStorage.posts || '[]')
    }

    function saveUsers(users) {
        localStorage.users = JSON.stringify(users)
    }

    function savePosts(posts) {
        localStorage.posts = JSON.stringify(posts)
    }


    // data

    function findUser(callback) {
        // save the actual users passing them from string to an array. 
        // if there are still no users => []
        var users = loadUsers()

        // get the user that we are looking for
        var user = users.find(callback)

        return user
    }

    function insertUser(user) {
        // get the users we have now as an array
        var users = loadUsers()

        user.id = generateId()

        // push the new user into the array
        users.push(user)

        // convert users array to string and save it in the localStorage
        saveUsers(users)
    }

    function printUsers() {
        var users = loadUsers()

        console.table(users)
    }

    function updateUser(user) {
        var users = loadUsers()

        var indexToUpdate = users.findIndex(function (user2) {
            return user2.id = user.id
        })

        if (indexToUpdate > -1) {
            users.splice(indexToUpdate, 1, user)
            saveUsers(users)
        }
    }

    function getAllUsers() {
        var users = loadUsers()

        return users
    }

    function insertPost(post) {
        var posts = loadPosts()

        post.id = generateId()

        posts.push(post)

        savePosts(posts)
    }

    function getAllPosts() {
        var posts = loadPosts()

        return posts
    }

    function findPost(callback) {
        var posts = loadPosts()

        var post = posts.find(callback)

        return post
    }

    function deletePost(callback) {
        var posts = loadPosts()

        var indexToDelete = posts.findIndex(callback)

        posts.splice(indexToDelete, 1)

        savePosts(posts)
    }

    return {
        findUser: findUser,
        insertUser: insertUser,
        printUsers: printUsers,
        updateUser: updateUser,
        getAllUsers: getAllUsers,
        insertPost: insertPost,
        getAllPosts: getAllPosts,
        findPost: findPost,
        deletePost: deletePost
    }

})()