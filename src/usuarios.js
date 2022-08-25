const listaUsuarios = []

class Usuario{
    constructor(email, contraseña, nombre, apellido, dni, fechaDeNac){
    this.email = email;
    this.contraseña = contraseña;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.fechaDeNac = fechaDeNac
    }

    agregarListaUsuarios(){
        listaUsuarios.push(new Usuario(this.email, this.contraseña, this.nombre, this.apellido, this.dni, this.fechaDeNac))
    }
}

const botonRegistro = document.querySelector("#botonRegistro")
botonRegistro.addEventListener("click", crearUsuario)

function crearUsuario(e){
    e.preventDefault()
    const cantidadUsuariosInicial = listaUsuarios.length
    const email = document.querySelector("#nuevoEmail").value
    const contraseña = String(document.querySelector("#nuevoPassword").value)
    const nombre = document.querySelector("#nuevoNombre").value
    const apellido = document.querySelector("#nuevoApellido").value
    const dni = parseInt(document.querySelector("#nuevoDni").value)
    const fechaDeNac = (document.querySelector("#nuevoFechaDeNac").value)

    const usuario = new Usuario (email, contraseña, nombre, apellido, dni, fechaDeNac)
    usuario.agregarListaUsuarios()

    const cantidadUsuariosActual = listaUsuarios.length
    const mensajeRegistro = document.querySelector("#mensajeRegistro")
    /* if (cantidadUsuariosActual>cantidadUsuariosInicial){
        mensajeRegistro.innerText = "Usuario registrado"
    }else{
        mensajeRegistro.innerText = "Error. Vuelva a intentarlo"
    } */
    cantidadUsuariosActual>cantidadUsuariosInicial ? mensajeRegistro.innerText = "Usuario registrado" : mensajeRegistro.innerText = "Error. Vuelva a intentarlo"
    console.log(listaUsuarios)
}