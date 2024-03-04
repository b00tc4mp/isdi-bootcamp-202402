function block(milliseconds) {
    var before = Date.now()
    //for (; Date.now() - before < 3000);
    while (Date.now() - before < milliseconds);
}

try {
    // business (logic)

    // we need rules to specify an user if its already registered(using some we make a test if the user email and the username are already registered) 
    var exists = users.some(function (user) {
        return user.email === email || user.username === username
    })

    if (exists) throw new Error('user already exists')

    // its going to be our object, receiving the information from all our elements above
    var user = {
        name: name,
        birthdate: birthdate,
        username: username,
        email: email,
        password: password
    }
    // using a method to push all the information received from the object
    users.push(user);

    // it is useful to reset the console, and then clear everything (similar than when we are cleaning an array manually)
    form.reset();

    // important to take the error and send the message properly to the user who is trying to register but its already registered
} catch (error) {
    alert(error.message)
}