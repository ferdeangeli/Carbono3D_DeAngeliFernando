const listaProductos = []

class Producto{
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

function crearProducto(e){
    e.preventDefault()
    const cantidadProductosInicial = listaProductos.length
    
    const codigos = [1]
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
    if (cantidadProductossActual>cantidadProductosInicial){
        const mensajeProducto = document.querySelector("#mensajeProducto")
        mensajeProducto.innerText = "Producto creado exitosamente"
    }else{
        const mensajeProducto = document.querySelector("#mensajeProducto")
        mensajeProducto.innerText = "Error. Vuelva a intentarlo"
    }
    console.log(listaProductos)
}
