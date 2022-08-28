function agregarCarrito(e){
    e.preventDefault()
    let listaCompras = JSON.parse(localStorage.getItem("carrito")) || [];
    localStorage.removeItem("carrito");

    const descripcion = "Hellbot Magna SE"
    let cantidad = parseInt(document.querySelector("#cantidadMagnaSE").value)
    const precio = parseFloat(document.querySelector("#precioMagnaSE").textContent)
    let subtotal = cantidad * precio

    listaCompras.push({descripcion, cantidad, precio, subtotal});
    let listaComprasJSON = JSON.stringify(listaCompras);
    localStorage.setItem("carrito", listaComprasJSON);
     
}

const botonCarrito = document.querySelector("#agregarCarritoMagnaSE")
botonCarrito.addEventListener("click", agregarCarrito)
