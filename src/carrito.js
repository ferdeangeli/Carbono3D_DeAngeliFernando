let listaCompras = []

class Compra{
    constructor(descripcion, cantidad, precio, subtotal){
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio
        this.subtotal = this.cantidad * this.precio
    }

    agregarListaCompras(){
        listaCompras.push(new Compra(this.descripcion, this.cantidad, this.precio, this.subtotal))
        
        localStorage.setItem("carrito", listaCompras)
    } 
}

function armarCarrito(e){
    e.preventDefault()
    const listaComprasInicial = []
    for (let i = 0; i = localStorage.length; i++){  
        if (localStorage.key = "carrito"){
            let claveCarrito = localStorage.key(i)
            
            listaComprasInicial.push(localStorage.getItem(claveCarrito))
        }
    }

    listaCompras = listaComprasInicial
    const compra = new Compra(descripcion, cantidad, precio, subtotal)
    compra.agregarListaCompras()
    localStorage.clear()
}


/* let cantItems = parseInt(prompt("Ingresar cantidad de items a agregar"))

for (let i=0; i<cantItems; i++){
    const descripcion = prompt("Ingrese nombre del item " +(i+1));
    const cantidad = prompt("Ingrese la cantidad deseada del item " +(i+1))
    const precio = prompt("Ingrese el precio del item " +(i+1))
    const subtotal = cantidad * precio
    const compra = new Compra(descripcion, cantidad, precio, subtotal)
    compra.agregarListaCompras()
} */


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
