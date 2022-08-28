export const listaProductos = [{codigo: 1, descripcion: "Ender 3 V2", color: "negro", categoria: "Impresoras", precio: 53900, stock: 5},
                        {codigo: 2, descripcion: "Magna 2 230", color: "rojo", categoria: "Impresoras", precio: 53900, stock: 6},
                        {codigo: 3, descripcion: "Magna 2 300", color: "rojo", categoria: "Impresoras", precio: 73390, stock: 2},
                        {codigo: 4, descripcion: "Magna SE", color: "naranja", categoria: "Impresoras", precio: 51900, stock: 6},
                        {codigo: 5, descripcion: "Hidra 220", color: "verde", categoria: "Impresoras", precio: 79900, stock: 2},
                        {codigo: 6, descripcion: "Hidra plus", color: "verde", categoria: "Impresoras", precio: 100690, stock: 3},
                        {codigo: 7, descripcion: "GENESIS I", color: "negro", categoria: "Impresoras", precio: 77000, stock: 2},
                        {codigo: 8, descripcion: "Halot One", color: "rojo", categoria: "Impresoras", precio: 57999, stock: 1}]

export class Producto{
    constructor(codigo, descripcion, color, categoria, precio, stock){
        this.codigo = Number(codigo);
        this.descripcion = descripcion;
        this.color = color;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
  
    agregarListaProductos(){
        listaProductos.push(new Producto(this.codigo, this.descripcion, this.color, this.categoria, this.precio, this.stock))
    }
}


const botonCrearProducto = document.querySelector("#botonCrearProducto")
botonCrearProducto.addEventListener("click", crearProducto)

const codigos = [0]

function crearProducto(e){
    e.preventDefault()
    const cantidadProductosInicial = listaProductos.length
    
    
    let ultimoCodigo = codigos.sort((a, b) => b - a)
    console.log(ultimoCodigo)
    let nuevoCod = Number(parseInt(ultimoCodigo[0]) + 1)
    codigos.push(nuevoCod)
    

    const codigo = nuevoCod
    const descripcion = String(document.querySelector("#productoDescripcion").value)
    const color = String(document.querySelector("#productoColor").value)
    const categoria = String(document.querySelector("#productoCategoria").value)
    const precio = Number(document.querySelector("#productoPrecio").value)
    const stock = Number(document.querySelector("#productoStock").value)
    const producto = new Producto (codigo, descripcion, color, categoria, precio, stock)
    producto.agregarListaProductos()


    const cantidadProductossActual = listaProductos.length
    const mensajeProducto = document.querySelector("#mensajeProducto")
    if (cantidadProductossActual>cantidadProductosInicial){
        Toastify({
            text: "Producto creado exitosamente",
            duration: 3000,
            gravity: "bottom",
            position: "center",
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
            }
        }).showToast()
    }else{
        Toastify({
            text: "Error, vuelva a intentarlo",
            duration: 3000,
            gravity: "bottom",
            position: "center",
            style: {
                background: 'linear-gradient(to right, #F55937, #E19E3E)'
            }
        }).showToast()
    }

    console.log(listaProductos)
}

