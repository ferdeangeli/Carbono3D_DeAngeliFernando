let listaCompras = JSON.parse(localStorage.getItem("carrito")) || []
console.log(listaCompras)

//Aca arma la tabla del carrito fila por fila

function tablaCarrito (array = []){
    const tbody = document.querySelector("#filasCarrito")
    
    for (const item of listaCompras){
        num = 0
        num++
        const tr = document.createElement("tr");
        tr.innerHTML = '<td>num</td> <td>${item.descripcion}</td> <td>${item.cantidad}</td> <td>${item.precio}</td> <td>${item.subtotal}</td>';
        tbody.appendChild(tr)
    }

    /* array.forEach( (producto) => {
        let num = 0
        num++
        let descripcion = producto.descripcion
        const tr = document.createElement("tr")
        tr.innerHTML = '<td>"descripcion"</td>'
        tbody.appendChild(tr);
    }); */
}

tablaCarrito(listaCompras)


//Aca calcula el total de lo que hay en el carrito


let subtotales = listaCompras.map((el) => el.subtotal)
let total = 0

function totalizar(arr, fn){
    for (const el of arr){
        fn(el)
    }
}

function sumar(subt){
    total += subt
}

totalizar(subtotales, sumar)

montoTotal = document.querySelector("#totalCarrito")
montoTotal.innerText = "$" + total

