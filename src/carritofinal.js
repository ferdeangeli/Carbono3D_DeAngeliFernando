//Aca arma la tabla del carrito fila por fila

const listaCompras = JSON.parse(localStorage.getItem("carrito")) || []

tablaCarrito()

function tablaCarrito (){
    
    const listaItems = document.querySelector("#listaItems");
    listaItems.innerHTML = ""
    num = 0

    for (const item of listaCompras){
        
        console.log(item);

        num++

        const tarjeta = document.createElement("div");
        tarjeta.innerHTML = 
                        `<div class="tarjetaItem">
                            <div id="${item.id}">
                                ${num}. ${item.descripcion}
                            </div>
                            <div class="actualizarCarrito">
                                <input class="actualizarCantidadCarrito form-control" type="number" value=${item.cantidad}></input>
                                <button class="botonActualizarCantidad"><img src="../assets/img/actualizar.png"></img></button>
                                <button class="botonEliminarCarrito"><img src="../assets/img/tachito.png"></img></button>
                            </div>
                            <div class="precioSubtotal">
                                <div>Precio: $${item.precio}</div>
                                <div>Subtotal: $${item.subtotal}</div>
                            </div>
                        </div>
                        <br>`

        
        listaItems.appendChild(tarjeta) 

     
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

    //Finalizar compra
    console.log(listaCompras)
    const botonComprar = document.querySelector("#botonComprar")
    if (listaCompras.length!=0){
        botonComprar.innerHTML = `<a href="./pago.html">Finalizar compra</a>`
    }else{
        botonComprar.addEventListener("click", (e) => {
            e.preventDefault()
            Toastify({
                text: "El carrito se encuentra vacío. Por favor, agregue los productos deseados",
                duration: 3000,
                gravity: "bottom",
                position: "center",
                style: {
                    background: 'linear-gradient(to right, #F55937, #E19E3E)'
                }
            }).showToast()
        })
        
    }

    

}

//funcion modificar cantidad de item de carrito

document.querySelectorAll(".actualizarCantidadCarrito").forEach(elemento => {
    elemento.addEventListener("click", (e) => {
        const nuevaCantidad = parseInt(e.target.value)

        document.querySelectorAll(".botonActualizarCantidad").forEach(elemento => {
            elemento.addEventListener("click", (e) => {
                const listaCompras = JSON.parse(localStorage.getItem("carrito")) || []
                const id = e.target.parentNode.parentNode.parentNode.children[0].id;
                const index = listaCompras.findIndex(producto => producto.id === Number(id))
                listaCompras[index].cantidad = nuevaCantidad

                const nuevoSubtotal = listaCompras[index].precio * nuevaCantidad
                listaCompras[index].subtotal = nuevoSubtotal

                let listaComprasJSON = JSON.stringify(listaCompras);
                localStorage.setItem("carrito", listaComprasJSON);

            })
        })    
    })
})

//funcion eliminar item del carrito

document.querySelectorAll(".botonEliminarCarrito").forEach(elemento => {
    elemento.addEventListener("click", (e) => {
        const listaCompras = JSON.parse(localStorage.getItem("carrito")) || []
        const id = e.target.parentNode.parentNode.parentNode.children[0].id;
        const index = listaCompras.findIndex(producto => producto.id === Number(id))
        listaCompras.splice(index, 1)
    
        let listaComprasJSON = JSON.stringify(listaCompras);
        localStorage.setItem("carrito", listaComprasJSON);
    })
})



//Vaciar carrito

const vaciarCarrito = (e) => {
    localStorage.removeItem("carrito")
}

const botonVaciarCarrito = document.querySelector("#vaciarCarrito")
botonVaciarCarrito.addEventListener("click", vaciarCarrito)

