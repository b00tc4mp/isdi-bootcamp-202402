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

        sessionStorage.username = username
    }


    function getUser(username) {
        var user = data.findUser(function (user) {
            return user.username === username
        })

        if (!user) throw new Error('user not found')

        return user
    }

    // function that deletes the actual user by clearing the sessionStorage
    function logoutUser() {
        sessionStorage.clear()
    }

    function savePostInfo(image, caption) {

        var post = {
            username: sessionStorage.username,
            image: image,
            caption: caption,
            date: new Date().toLocaleDateString('en-CA')
        }
        data.insertPost(post)
    }

    return {
        registerUser: registerUser,
        loginUser: loginUser,
        getUser: getUser,
        logoutUser: logoutUser,
        savePostInfo: savePostInfo
    }

})()