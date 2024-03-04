//business logic


function registerUser(name, surname, birthdate, email, username, password){
    //RegisterUser verifica si ya existe un usuario con el mismo nombre de usuario o correo electrónico. 
    var exists = users.some (function(user){
        return user.email === email || user.username === username
    })
    //En caso que exista se lanza error. 
    if(exists) throw new Error ('user already exists')

    var user = { // Crea un nuevo objeto de usuario 
        name: name,
        surname: surname,
        birthdate: birthdate,
        email: email,
        username: username,
        password: password
    }
    //Agrega el nuevo usuario al array de usuarios y se agrega al array users.
    users.push(user)
    //Almacena la información de usuarios en el almacenamiento local
    localStorage.users = JSON.stringify(users)
}

function loginUser(username, password) { //La función verifica si hay un usuario que coincida con el nombre de usuario y la contraseña 
    var match = users.some(function(user){
        return user.username === username && user.password === password 
    })
    //Si no hay coincidencia, se lanza un error.
    if(!match) throw new Error ('wrong credentials')
    //El nombre de usuario se almacena en la sesión
    sessionStorage.username = username
}

function retrieveUser(username){ //La función busca un usuario por nombre de usuario.
    var user = users.find(function(user){
        return user.username === username
    })
    //Si no se encuentra el usuario, se lanza un error.
    if (!user) throw new Error ('user not found')
    //Devolver el objeto de usuario encontrado
    return user
}