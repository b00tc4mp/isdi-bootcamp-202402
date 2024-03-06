//business logic

var logic = (function() {
    function registerUser(name, surname, birthdate, email, username, password){
        //RegisterUser verifica si ya existe un usuario con el mismo nombre de usuario o correo electrónico. 
        var user = data.findUser (function(user){
            return user.email === email || user.username === username
        })
        //En caso que exista se lanza error. 
        if(user) throw new Error ('user already exists')

        user = { // Crea un nuevo objeto de usuario 
            name: name,
            surname: surname,
            birthdate: birthdate,
            email: email,
            username: username,
            password: password
        }
        
        data.insertUser(user)
    }

    function loginUser(username, password) { //La función verifica si hay un usuario que coincida con el nombre de usuario y la contraseña 
        var user = data.findUser(function(user){
            return user.username === username && user.password === password 
        })
        //Si no hay coincidencia, se lanza un error.
        if(!user) throw new Error ('wrong credentials')
        //El nombre de usuario se almacena en la sesión
        sessionStorage.username = username
    }

    function retrieveUser(){ //La función busca un usuario por nombre de usuario.
        var user = data.findUser(function(user){
            return user.username === sessionStorage.username
        })
        //Si no se encuentra el usuario, se lanza un error.
        if (!user) throw new Error ('user not found')
        //Devolver el objeto de usuario encontrado
        return user
    }

    function logoutUser(){
        sessionStorage.clear()
    }

    function createPost(image, text){
        var post = {
            username: sessionStorage.username,
            image: image,
            text: text,
            date: new Date().toLocaleDateString('en-CA')
        }

        data.insertPost(post)
    }

    return{
        registerUser: registerUser,
        loginUser: loginUser,
        retrieveUser: retrieveUser,
        logoutUser: logoutUser,
        createPost: createPost
    }

})()