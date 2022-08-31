const listaCompras = JSON.parse(localStorage.getItem("carrito")) || []
console.log(listaCompras)

//Aca arma la tabla del carrito fila por fila

function tablaCarrito (){
    const tbody = document.querySelector("#filasCarrito")
    num = 0

    for (const item of listaCompras){
       
        num++
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${num}</td>
                        <td style="text-align:left">${item.descripcion}</td>
                        <td>${item.cantidad}</td>
                        <td>${item.precio}</td>
                        <td>$${item.subtotal}</td>
                        <td><input class="actualizarCantidadCarrito form-control" type="number" value=${item.cantidad}></input></td>
                        <td><button class="botonEliminarCarrito"><img src="../assets/img/tachito.png"></img></button></td>`

        tbody.appendChild(tr)

    }

   }

tablaCarrito()


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

//Checkout

const finalizarCompra = (e) => {
    e.preventDefault()
    swal("¡Muchas gracias por su Compra!", "Enviaremos su factura por email", "success")
    localStorage.removeItem("carrito")
}

botonComprar = document.querySelector("#botonComprar")
botonComprar.addEventListener("click", finalizarCompra)

