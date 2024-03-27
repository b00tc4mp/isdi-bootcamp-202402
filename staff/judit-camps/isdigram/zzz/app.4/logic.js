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

        var user = data.users.findOne(function (user) {
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

        data.users.insertOne(user)
    }


    function loginUser(username, password) {
        var user = data.users.findOne(function (user) {
            return user.username === username && user.password === password
        })

        if (!user) throw new Error('wrong credentials')

        user.status = 'online'

        data.users.updateOne(user)

        sessionStorage.userId = user.id
    }


    function getUser() {
        var user = data.users.findOne(function (user) {
            return user.id === sessionStorage.userId
        })

        if (!user) throw new Error('user not found')

        return user
    }

    function retrieveUsers() {
        var users = data.users.getAll()

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
            return a.status > b.status ? -1 : 1

        })
        users.sort(function (a, b) {
            return a.username < b.username ? -1 : 1
        })

        return users
    }

    // function that deletes the actual user by clearing the sessionStorage
    function logoutUser() {
        var user = data.users.findOne(function (user) {
            return user.id === sessionStorage.userId
        })

        if (!user) throw new Error('wrong credentials')

        user.status = 'offline'

        data.users.updateOne(user)

        delete sessionStorage.userId
    }

    function getLoggedInUser() {
        return sessionStorage.userId
    }

    function isUserLoggedIn() {
        return !!sessionStorage.userId
    }

    function cleanUpLoggedInUser() {
        delete sessionStorage.userId
    }

    function savePostInfo(image, caption) {
        validateUrl(image, 'the url')
        var post = {
            author: sessionStorage.userId,
            image: image,
            caption: caption,
            date: new Date().toLocaleDateString('en-CA')
        }
        data.posts.insertOne(post)
    }

    function retrievePostsLatestFirst() {
        var posts = data.posts.getAll()

        posts.forEach(function (post) {
            var user = data.users.findOne(function (user) {
                return user.id === post.author
            })
            post.author = { id: user.id, username: user.username }
        })

        return posts.slice().reverse()
    }

    function removePost(postId) {
        var post = data.posts.findOne(function (post) {
            return post.id === postId
        })

        if (!post) throw new Error('post not found')

        if (post.author !== sessionStorage.userId) throw new Error('post does not belong to user')

        data.posts.deleteOne(function (post) {
            return post.id === postId
        })
    }

    function editPostText(postId, newCaption) {
        console.log("Received postId:", postId);
        var post = data.posts.findOne(function (post) {
            return post.id === postId
        })
        console.log('Post found: ', post)
        if (!post) throw new Error('post not found')

        if (post.author !== sessionStorage.userId) throw new Error('post does not belong to user')

        post.caption = newCaption

        data.posts.updateOne(post)
    }

    function sendMessageTo(userId, text) {
        validateText(userId, 'userId', true)
        validateText(text, 'text')

        var chat = data.chats.findOne(function (chat) {
            return chat.users.includes(userId) && chat.users.includes(sessionStorage.userId)
        })

        if (!chat) {
            chat = {
                users: [sessionStorage.userId, userId],
                messages: []
            }
        }

        var message = {
            from: sessionStorage.userId,
            text: text,
            date: new Date().toISOString()
        }

        chat.messages.push(message)

        if (!chat.id)
            data.chats.insertOne(chat)
        else
            data.chats.updateOne(chat)
    }

    function retrieveMessagesWith(userId) {
        validateText(userId, 'userId', true)

        var chat = data.chats.findOne(function (chat) {
            return chat.users.includes(userId) && chat.users.includes(sessionStorage.userId)
        })

        if (chat)
            return chat.messages
        else
            return []
    }

    return {
        registerUser: registerUser,
        loginUser: loginUser,
        getUser: getUser,
        logoutUser: logoutUser,
        getLoggedInUser: getLoggedInUser,
        retrieveUsers: retrieveUsers,
        isUserLoggedIn: isUserLoggedIn,
        cleanUpLoggedInUser: cleanUpLoggedInUser,

        savePostInfo: savePostInfo,
        retrievePostsLatestFirst: retrievePostsLatestFirst,
        removePost: removePost,
        editPostText: editPostText,

        sendMessageTo: sendMessageTo,
        retrieveMessagesWith: retrieveMessagesWith
    }

})()