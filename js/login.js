//La lista de usuarios despues deberia estar en una base de datos, accesible desde la pagina de creacion de usuarios y para el administrador. Ahora la creo yo para armar el simulador.

const datosIngreso = [{email:"pepe@gmail.com", password:"1234"},{email:"cachito@gmail.com", password:"2345"},{email:"admin@gmail.com", password:"admin"}]


let botonLogin = document.querySelector("#botonLogin")
botonLogin.addEventListener("click", login)


function login(e){    
    let emailIngresado = document.querySelector("#loginEmail").value;
    let passwordIngresado = String(document.querySelector("#loginPassword").value)
    console.log(emailIngresado)
    console.log(passwordIngresado)
    e.preventDefault()

    const checkEmail = datosIngreso.filter((el) => el.email === emailIngresado)
    if (checkEmail.length != 0){
        console.log(checkEmail)
        checkPassword = checkEmail.find((el) => el.password === passwordIngresado)

        switch (emailIngresado){
            case "admin@gmail.com":
                if (checkPassword != undefined){
                    const mensajeIngreso = document.querySelector("#mensajeLogin")
                    mensajeIngreso.innerHTML = "<div><a href='./administrador.html' style='color:white'>Bienvenido ADMINISTRADOR</a></div>"
                }else{
                    const mensajeIngreso = document.querySelector("#mensajeLogin")
                    mensajeIngreso.innerText = "Los datos son incorrectos"
                } 
                break;
            default:
                if (checkPassword != undefined){
                    const mensajeIngreso = document.querySelector("#mensajeLogin")
                    mensajeIngreso.innerText = "Bienvenido"
                }else{
                    const mensajeIngreso = document.querySelector("#mensajeLogin")
                    mensajeIngreso.innerText = "Los datos son incorrectos"
                }
                break;
        }
    }else{
        const mensajeIngreso = document.querySelector("#mensajeLogin")
        mensajeIngreso.innerText = "El usuario no existe"
    }
}