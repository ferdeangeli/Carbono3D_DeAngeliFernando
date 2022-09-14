

//Aca arma la tabla del carrito fila por fila


tablaCarrito()

function tablaCarrito (){
    const listaCompras = JSON.parse(localStorage.getItem("carrito")) || []
    const listaItems = document.querySelector("#listaItems");
    num = 0

    for (const item of listaCompras){
       
        num++

        const tarjeta = document.createElement("div");
        tarjeta.innerHTML = 
                        `<div class="tarjetaItemPago">
                            <div>
                                ${num}. ${item.descripcion} x ${item.cantidad}
                            </div>
                            <div class="precioSubtotalPago">
                                <div>Precio: $${item.precio}</div>
                                <div>Subtotal: $${item.subtotal}</div>
                            </div>
                        </div>
                        <br>`

        listaItemsPago.appendChild(tarjeta) 
        
    }
    //Aca calcula el total de lo que hay en el carrito

    let subtotales = listaCompras.map((el) => el.subtotal)
    let total = 0

    const totalizar = (arr, fn) => {
        for (const el of arr){
            fn(el)
        }
    }

    const sumar = (subt) => {
        total += subt
    }

    totalizar(subtotales, sumar)

    montoTotal = document.querySelector("#totalCarrito")
    montoTotal.innerText = "$" + total    
   }

//Checkout con tarjeta de credito

botonPagar = document.querySelector("#botonPagar")
botonPagar.addEventListener("click", (e) => {
    e.preventDefault()

    const opcionTarjeta = document.querySelector("#opcionTarjeta")
    const inputTarjeta = parseInt(document.querySelector(".inputTarjeta").value) || ""
    const inputVencimiento = parseInt(document.querySelector(".inputVencimiento").value) || ""
    const inputSeguridad = parseInt(document.querySelector(".inputSeguridad").value) || ""

    console.log(inputTarjeta)
    console.log(inputVencimiento)
    console.log(inputSeguridad)

    if (opcionTarjeta.checked && inputTarjeta!="" && inputVencimiento!="" && inputSeguridad!=""){
        swal("¡Muchas gracias por su Compra!", "Enviaremos su factura por email", "success")
        localStorage.removeItem("carrito")
        
    }else{
        swal("Por favor seleccione una opción", "Seleccione pago con Tarjeta y complete los datos requeridos", "error")
    }
    
})


//Checkout pago con transferencia

const botonPagarTransferencia = document.querySelector("#botonEnviarComprobante")
botonPagarTransferencia.addEventListener("click", (e) => {
    if(opcionTransferencia.checked){
        swal("¡Muchas gracias por su Compra!", "Enviaremos su factura por email", "success")
        localStorage.removeItem("carrito")
    }else{
        swal("Por favor seleccione una opción", "Seleccione pago con Tarjeta y complete los datos requeridos", "error")
    }
    
})


