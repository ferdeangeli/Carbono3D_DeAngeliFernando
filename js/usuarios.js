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

let cant = parseInt(prompt("ingresar cantidad de usuarios"))

for (let i=0; i < cant ; i++){
    const email = prompt("ingrese email "  + (i+1))
    const contraseña = prompt("ingrese contraseña "  + (i+1))
    const nombre = prompt("ingrese nombre "  + (i+1))
    const apellido = prompt("ingrese apellido "  + (i+1))
    const dni = prompt("ingrese DNI "  + (i+1))
    const fechaDeNac = prompt("ingrese fecha de nacimiento "  + (i+1))

    const usuario = new Usuario (email, contraseña, nombre, apellido, dni, fechaDeNac)
    usuario.agregarListaUsuarios()
    console.log(listaUsuarios)
}