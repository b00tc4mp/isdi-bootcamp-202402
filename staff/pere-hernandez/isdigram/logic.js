// business (logic)

var logic = (function () {
    
    function registerUser(username, email, password, confirmedPassword){
        var foundUser = data.findUser(function (user) {
            return (user.email === email || user.username === username)
        })

        if (foundUser) throw new Error ('user already exists')
        if (password !== confirmedPassword) throw new Error ("passwords don't match")

        var user = {
            email: email,
            username: username,
            password: password
        }

        data.insertUser(user)
    } 


    function loginUser (username, password){
        var match = data.findUser(function (user){
            return user.username === username && user.password === password
        })

        if (!match) throw new Error ('wrong credentials')

        sessionStorage.username = username
    }


    function retrieveUser (username){
        var user = data.findUser(function(user){
            return user.username === sessionStorage.username
        })

        if (!user) throw new Error('user not found')

        return user
    }


    function logoutUser(){
        sessionStorage.clear()
    }
    

    function createPost (photo, comment){
        var post = {
            username: sessionStorage.username,
            photo: photo,
            comment: comment,
            date: new Date().toLocaleDateString('en-CA')
        }

        data.insertPost(post)
    }

    return {
        registerUser: registerUser,
        loginUser: loginUser,
        retrieveUser: retrieveUser,
        logoutUser: logoutUser,
        createPost: createPost
    }
}) ()
