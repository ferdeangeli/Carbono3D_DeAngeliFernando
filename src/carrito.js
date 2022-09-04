const botonAgregarCarrito = document.querySelector(".botonAgregarCarrito")
botonAgregarCarrito.addEventListener("click", agregarCarrito)

function agregarCarrito(e){
    e.preventDefault()
    let listaCompras = JSON.parse(localStorage.getItem("carrito")) || []
    localStorage.removeItem("carrito")

    const descripcion = document.querySelector("title").innerText
    let cantidad = parseInt(document.querySelector(".cantidadPedido").value)
    const precio = parseFloat(document.querySelector(".precioImpresora2").textContent)
    let subtotal = cantidad * precio

    if (cantidad > 0){
        listaCompras.push({descripcion, cantidad, precio, subtotal});

        Toastify({
            text: "El producto fue agregado al carrito",
            duration: 3000,
            gravity: "bottom",
            position: "center",
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
            }
        }).showToast()
    }else{
        Toastify({
            text: "Ingrese cantidad requerida",
            duration: 3000,
            gravity: "bottom",
            position: "center",
            style: {
                background: 'linear-gradient(to right, #F55937, #E19E3E)'
            }
        }).showToast()
    }
    let listaComprasJSON = JSON.stringify(listaCompras);
    localStorage.setItem("carrito", listaComprasJSON);
    console.log(listaCompras)

}

