// business (logic)

function registerUser(username, email, password, confirmedPassword){
    if (password !== confirmedPassword) throw new Error("Passwords don't match")

    var userExists = users.some(function (user) {
        return user.email === email || user.username === username
    })

    if (userExists) throw new Error('user already exists')

    var user = {
        email: email,
        username: username,
        password: password
    }

    users.push(user)

    localStorage.users = JSON.stringify(users)
}



function loginUser (username, password){
    var match = users.some(function (user){
        return user.username === username && user.password === password
    })

    if (!match) throw new Error ('wrong credentials')

    sessionStorage.username = username
}



function retrieveUser (username){
    var user = users.find(function(user){
        return user.username === username
    })

    if (!user) throw new Error('user not found')

    return user
}