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

let listaCompras = JSON.parse(localStorage.getItem("carrito")) || []
let subtotales = listaCompras.map((el) => el.subtotal)
subtotales.forEach(subtotal => {
    total =+ subtotal
})
document.setItem("#totalCarrito").textContent = total
