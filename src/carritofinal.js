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
                        `<div class="tarjetaItem">
                            <div>
                                ${num}. ${item.descripcion}
                            </div>
                            <div class="actualizarCarrito">
                                <input id="cantidad${num}" class="actualizarCantidadCarrito form-control" type="number" value=${item.cantidad}></input>
                                <button id="actualizarCantidad${num}" class="botonActualizarCantidad"><img src="../assets/img/actualizar.png"></img></button>
                                <button id="eliminar${num}" class="botonEliminarCarrito"><img src="../assets/img/tachito.png"></img></button>
                            </div>
                            <div class="precioSubtotal">
                                <div>Precio: $${item.precio}</div>
                                <div>Subtotal: $${item.subtotal}</div>
                            </div>
                        </div>
                        <br> 
                        
                        <script>
                            const botonActualizarCantidad${num}= document.querySelector("#actualizarCantidad${num}")
                            botonActualizarCantidad${num}.addEventListener("click", modificarCantidad)

                            function modificarCantidad${num}(e){
                                let nuevaCantidad = parseInt(document.querySelector("#cantidad${num}").value)
                                let listaCompras = JSON.parse(localStorage.getItem("carrito")) || []
                                localStorage.removeItem("carrito")
                    
                                listaCompras[${num}-1].cantidad = nuevaCantidad
                                listaCompras[${num}-1].subtotal = nuevaCantidad*listaCompras[${num}-1].precio
                    
                                
                                let listaComprasJSON = JSON.stringify(listaCompras);
                                localStorage.setItem("carrito", listaComprasJSON);
                                console.log(listaCompras)
                            }
                            
                            
                            const botonEliminarItem${num} = document.querySelector("#eliminar${num}")
                            botonEliminarItem${num}.addEventListener("click", eliminarItem${num})

                            function eliminarItem${num}(e){
                                localStorage.removeItem("carrito")
                                listaCompras.splice(${num}-1,1)

                                let listaComprasJSON = JSON.stringify(listaCompras);
                                localStorage.setItem("carrito", listaComprasJSON);
                            }
                            
                        </script>`

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


//Vaciar carrito

const vaciarCarrito = (e) => {
    localStorage.removeItem("carrito")
}

const botonVaciarCarrito = document.querySelector("#vaciarCarrito")
botonVaciarCarrito.addEventListener("click", vaciarCarrito)

