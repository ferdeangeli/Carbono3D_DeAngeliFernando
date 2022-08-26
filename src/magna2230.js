
function agregarCarrito(e){
    e.preventDefault()
    let listaCompras = localStorage.getItem("carrito") || [];
    localStorage.removeItem("carrito");

    const descripcion = "Hellbot Magna 2 230"
    let cantidad = parseInt(document.querySelector("#cantidadMagna2230").value)
    const precio = parseFloat(document.querySelector("#precioMagna2230").textContent)
    let subtotal = cantidad * precio

    listaCompras.push(descripcion, cantidad, precio, subtotal);
    let listaComprasJSON = JSON.stringify(listaCompras);
    localStorage.setItem("carrito", listaComprasJSON);
     
}

const botonCarrito = document.querySelector("#agregarCarritoMagna2230")
botonCarrito.addEventListener("click", agregarCarrito)
