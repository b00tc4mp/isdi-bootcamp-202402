// bussiness (logic)
var logic = (function () {

    // constants
    var DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
    var PASSWORD_REGEX = /^(?=.*[0-9])(?=.*[A-Za-z])[A-Za-z0-9]+$/
    var EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var URL_REGEX = /^(http|https):\/\//

    // helpers
    function validateDate(date, explanation) {
        if (!DATE_REGEX.test(date)) throw new Error(explanation + ' ' + date + ' is not a valid date')
    }

    function validateText(text, explanation, checkEmptyInside) {
        if (typeof text !== 'string') throw new Error(explanation + ' ' + text) + ' is not a string'
        if (!text.trim().length) throw new Error(explanation + ' >' + text + '< is empty or blank')

        if (checkEmptyInside) {
            if (text.includes(' ')) throw new Error(explanation + ' ' + text + 'has empty spaces')
        }
    }

    function validateEmail(email, explanation) {
        if (!EMAIL_REGEX.test(email)) throw new Error(explanation + ' ' + email + ' is not a correct email')
    }

    function validateUrl(url, explanation) {
        if (!URL_REGEX.test(url)) throw new Error(explanation + ' ' + url + ' is not a correct url path')
    }

    function validatePassword(password, explanation) {
        if (!PASSWORD_REGEX.test(password)) throw new Error(explanation + ' ' + password + ' is not acceptable')
    }

    // logic
    function registerUser(name, birthdate, email, username, password) {
        validateText(name, 'the name')
        validateDate(birthdate)
        validateEmail(email, 'the email')
        validateText(username, 'the username', true)
        validatePassword(password, 'the password')

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

        user.status = 'online'

        data.updateUser(user)

        sessionStorage.userId = user.id
    }


    function getUser() {
        var user = data.findUser(function (user) {
            return user.id === sessionStorage.userId
        })

        if (!user) throw new Error('user not found')

        return user
    }

    function retrieveUsers() {
        var users = data.getAllUsers()

        var indexToDelete = users.findIndex(function (user) {
            return user.id === sessionStorage.userId
        })

        users.splice(indexToDelete, 1)

        users.forEach(function (user) {
            delete user.password
            delete user.email
            delete user.birthdate
            delete user.name
        })

        users.sort(function (a, b) {
            return a.username < b.username ? -1 : 1
        }).sort(function (a, b) {
            return a.status > b.status ? -1 : 1
        })

        return users
    }

    // function that deletes the actual user by clearing the sessionStorage
    function logoutUser() {
        var user = data.findUser(function (user) {
            return user.id === sessionStorage.userId
        })

        if (!user) throw new Error('wrong credentials')

        user.status = 'ofline'

        data.updateUser(user)

        delete sessionStorage.userId
    }

    function getLoggedInUser() {
        return sessionStorage.userId
    }

    function isUserLoggedIn() {
        return !!sessionStorage.userId
    }

    function savePostInfo(image, caption) {
        validateUrl(image, 'the url')
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

    function editPostText(postId, newCaption) {
        console.log("Received postId:", postId);
        var post = data.findPost(function (post) {
            return post.id === postId
        })
        console.log('Post found: ', post)
        if (!post) throw new Error('post not found')

        if (post.author !== sessionStorage.userId) throw new Error('post does not belong to user')

        post.caption = newCaption

        data.updatePost(post)


    }

    return {
        registerUser: registerUser,
        loginUser: loginUser,
        getUser: getUser,
        logoutUser: logoutUser,
        getLoggedInUser: getLoggedInUser,
        retrieveUsers: retrieveUsers,
        isUserLoggedIn: isUserLoggedIn,
        savePostInfo: savePostInfo,
        retrievePostsLatestFirst: retrievePostsLatestFirst,
        removePost: removePost,
        editPostText: editPostText
    }

})()