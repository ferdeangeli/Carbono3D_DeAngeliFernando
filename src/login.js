//La lista de usuarios despues deberia estar en una base de datos, accesible desde la pagina de creacion de usuarios y para el administrador. Ahora la creo yo para armar el simulador.

const datosIngreso = [{email:"pepe@gmail.com", nombre: "pepe", password:"1234"},{email:"cachito@gmail.com", nombre: "cachito", password:"2345"},{email:"admin@gmail.com", nombre: "admin", password:"admin"}]



let botonLogin = document.querySelector("#botonLogin")
botonLogin.addEventListener("click", login)

/* const datosIngreso = []

const chequearUsuarios = async () => {
    await fetch("../usuarios.json")
        .then((resp) => resp.json())
        .then((data) => datosIngreso.push(data))
    console.log(datosIngreso)
} 

chequearUsuarios() */

function login(e){    
    let emailIngresado = document.querySelector("#loginEmail").value;
    let passwordIngresado = String(document.querySelector("#loginPassword").value)
    e.preventDefault()

    const checkEmail = datosIngreso.filter(({email}) => email === emailIngresado)
    if (checkEmail.length != 0){
        console.log(checkEmail[0].nombre)
        const checkPassword = checkEmail.find(({password}) => password === passwordIngresado)

        const mensajeIngreso = document.querySelector("#mensajeLogin")

        switch (emailIngresado){
            case "admin@gmail.com":
                if (checkPassword != undefined){
                    mensajeIngreso.innerHTML = "<div><a href='./administrador.html' style='color:white'>PORTAL DE ADMINISTRADOR</a></div>"
                    Toastify({
                        text: "Bienvenido Administrador",
                        duration: 3000,
                        gravity: "bottom",
                        position: "center",
                        style: {
                            background: 'linear-gradient(to right, #00b09b, #96c92d)'
                        }
                    }).showToast()

                    const imagenLogin = document.querySelector(".linkLogin")
                    imagenLogin.innerText = "ADMIN"

                }else{
                    Toastify({
                        text: "Los datos son incorrectos, vuelva a intentarlo",
                        duration: 3000,
                        gravity: "bottom",
                        position: "center",
                        style: {
                            background: 'linear-gradient(to right, #F55937, #E19E3E)'
                        }
                    }).showToast()
                }
                break;
            default:
                if (checkPassword != undefined){
                    Toastify({
                        text: "Bienvenido",
                        duration: 3000,
                        gravity: "bottom",
                        position: "center",
                        style: {
                            background: 'linear-gradient(to right, #00b09b, #96c92d)'
                        }
                    }).showToast()

                    const imagenLogin = document.querySelector(".linkLogin")
                    imagenLogin.innerText = checkEmail[0].nombre.toUpperCase()

                }else{
                    Toastify({
                        text: "Los datos son incorrectos, vuelva a intentarlo",
                        duration: 3000,
                        gravity: "bottom",
                        position: "center",
                        style: {
                            background: 'linear-gradient(to right, #F55937, #E19E3E)'
                        }
                    }).showToast()
                }
                break;
        }
    }else{
        const mensajeIngreso = document.querySelector("#mensajeLogin")
        mensajeIngreso.innerText = "El usuario no existe"
    }
}