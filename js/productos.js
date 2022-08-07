const listaProductos = []

class Producto{
    constructor(codigo, descripcion, color, categoria, precio, stock){
        this.codigo = codigo;
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

let ultimoCodigo
let nuevoCod

function nuevoCodigo(){
    const codigos = listaProductos.map((el) => el.codigo)
    ultimoCodigo = Math.max(codigos)
    nuevoCod = parseInt(ultimoCodigo + 1)
}


for (let i=0; i<2; i++){
    nuevoCodigo()
    const codigo = nuevoCod
    const descripcion = prompt("ingrese descripcion del producto " + (i+1))
    const color = prompt("ingrese color del producto " + (i+1))
    const categoria = prompt("ingrese categoria del producto " + (i+1))
    const precio = prompt("ingrese precio del producto " + (i+1))
    const stock = prompt("ingrese stock del producto " + (i+1))
    const producto = new Producto (codigo, descripcion, color, categoria, precio, stock)
    producto.agregarListaProductos()
    console.log(producto)
    
}

console.log(listaProductos)