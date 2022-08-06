const listaCompras = []

//cuando el usuario seleccione una cantidad diferente a 0 y apriete el boton agregar a carrito, se hace un push a la listaCompras, con el producto, cantidad y precio. 

class Compra{
    constructor(codigo, descripcion, cantidad, precio){
        this.codigo = codigo
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.precio = precio
    }
    subtotal(){
        let subtotal
        subtotal = this.cantidad * this.precio
    }

    agregarListaCompras(){
        listaCompras.push(new Compra(this.codigo, this.descripcion, this.cantidad, this.precio))
    } 
}

let botonComprar = document.querySelector("#botonComprar")

botonComprar.addEventListener("click", rtaBotonComprar)
function rtaBotonComprar(e){
    console.log("compraste")
    e.preventDefault()
}
