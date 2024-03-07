// bussiness (logic)
var logic = (function () {

    function registerUser(name, birthdate, email, username, password) {
        var user = data.findUser(function (user) {
            return user.email === email || user.username === username
        })

        if (user) throw new Error('user already exists')

        var user = {
            name: name,
            birthdate: birthdate,
            email: email,
            username: username,
            password: password
        }

        data.insertUser(user)
    }


    function loginUser(username, password) {
        var user = data.findUser(function (user) {
            return user.username === username && user.password === password
        })

        if (!user) throw new Error('wrong credentials')

        sessionStorage.userId = user.id
    }


    function getUser() {
        var user = data.findUser(function (user) {
            return user.id === sessionStorage.userId
        })

        if (!user) throw new Error('user not found')

        return user
    }

    // function that deletes the actual user by clearing the sessionStorage
    function logoutUser() {
        sessionStorage.clear()
    }

    function getLoggedInUser() {
        return sessionStorage.userId
    }

    function isUserLoggedIn() {
        return !!sessionStorage.userId
    }

    function savePostInfo(image, caption) {
        var post = {
            author: sessionStorage.userId,
            image: image,
            caption: caption,
            date: new Date().toLocaleDateString('en-CA')
        }
        data.insertPost(post)
    }

    function retrievePostsLatestFirst() {
        var posts = data.getAllPosts()

        posts.forEach(function (post) {
            var user = data.findUser(function (user) {
                return user.id === post.author
            })
            post.author = { id: user.id, username: user.username }
        })

        return posts.slice().reverse()
    }

    function removePost(postId) {
        var post = data.findPost(function (post) {
            return post.id === postId
        })

        if (!post) throw new Error('post not found')

        if (post.author !== sessionStorage.userId) throw new Error('post does not belong to user')

        data.deletePost(function (post) {
            return post.id === postId
        })
    }

    return {
        registerUser: registerUser,
        loginUser: loginUser,
        getUser: getUser,
        logoutUser: logoutUser,
        getLoggedInUser: getLoggedInUser,
        isUserLoggedIn: isUserLoggedIn,
        savePostInfo: savePostInfo,
        retrievePostsLatestFirst: retrievePostsLatestFirst,
        removePost: removePost
    }

})()