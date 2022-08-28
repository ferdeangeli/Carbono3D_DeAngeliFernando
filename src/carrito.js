import { listaProductos } from "./productos.js";

export function agregarCarrito(e){
    e.preventDefault()
    let listaCompras = JSON.parse(localStorage.getItem("carrito")) || [];
    localStorage.removeItem("carrito");

    const descripcion = document.querySelector(".descripcionItem").textContent
    let cantidad = parseInt(document.querySelector("#cantidadMagna2230").value)
    const precio = parseFloat(document.querySelector("#precioMagna2230").textContent)
    let subtotal = cantidad * precio

    listaCompras.push({descripcion, cantidad, precio, subtotal});
    let listaComprasJSON = JSON.stringify(listaCompras);
    localStorage.setItem("carrito", listaComprasJSON);
    
}


/* let subtotales = listaCompras.map((el) => el.subtotal)

let total = 0

function totalizar(arr, fn){
    for (const el of arr){
        fn(el)
    }
}

function sumar(subt){
    total += subt
}

totalizar(subtotales, sumar) */
