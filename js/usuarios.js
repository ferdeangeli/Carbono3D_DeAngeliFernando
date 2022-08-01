const listaUsuarios = []

class Usuario{
    constructor(email, contraseña, nombre, apellido, dni, fechaDeNac);
    this.email = email;
    this.contraseña = contraseña;
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.fechaDeNac = fechaDeNac

    agregarListaUsuarios(){
        listaUsuarios.push(new Usuario(this.email, this.contraseña, this.nombre, this.apellido, this.dni, this.fechaDeNac))
    }
}