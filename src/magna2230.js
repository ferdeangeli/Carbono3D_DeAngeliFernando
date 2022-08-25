
function agregarCarrito(e){
    e.preventDefault()

    const descripcion = "Hellbot Magna 2 230"
    const cantidad = parseInt(document.querySelector("#cantidadMagna2230").value)
    const precio = parseFloat(document.querySelector("#precioMagna2230").value)
    const subtotal = cantidad * precio  

    const listaCompras = localStorage.getItem("carrito") || [];
    localStorage.removeItem("carrito");
    function nuevaLista(){
        listaCompras.push(descripcion, cantidad, precio, subtotal);
        const listaComprasJSON = JSON.stringify(listaCompras);
        localStorage.setItem("carrito", listaComprasJSON);
    }
    nuevaLista()
    
    console.log(listaCompras)
    console.log(parseInt(cantidad))
    console.log(precio)
    console.log(subtotal)
}

const botonCarrito = document.querySelector("#agregarCarritoMagna2230")
botonCarrito.addEventListener("click", agregarCarrito)
