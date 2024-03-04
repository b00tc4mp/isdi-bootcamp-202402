function registerUser(name, birthdate, email, username, password) {
    var exists = users.some(function (user) {
        return user.email === email || user.username === username
    })

    if (exists) throw new Error('user already exists')

    var user = {
        name: name,
        birthdate: birthdate,
        email: email,
        username: username,
        password: password
    }

    users.push(user)
}