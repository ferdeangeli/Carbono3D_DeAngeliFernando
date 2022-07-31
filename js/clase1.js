class Producto{
    constructor(descripcion, color, precio, cantidad, stock){
        this.descripcion = descripcion;
        this.color = color
        this.precio = parseFloat(precio);
        this.cantidad = parseInt(cantidad);
        this.stock = parseInt(stock)
    }

    subtotal(){
        if (this.cantidad <= this.stock){
            let subtotal = this.cantidad * this.precio
            console.log(subtotal)
        }else{
            alert("El maximo a disponible es " + this.stock)
        }
    }
}

for (i=0; i<2; i++){
    const descripcion = prompt("ingrese descripcion del producto " + (i+1))
    const color = prompt("ingrese color del producto " + (i+1))
    const precio = prompt("ingrese precio del producto " + (i+1))
    const cantidad = prompt("ingrese cantidad del producto " + (i+1))
    const stock = prompt("ingrese stock del producto " + (i+1))
    const producto = new Producto (descripcion, color, precio, cantidad, stock)
    console.log(producto)
    
    producto.subtotal()
}
