const listaCompras = []


class Compra{
    constructor(descripcion, cantidad, precio, subtotal){
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio
        this.subtotal = this.cantidad * this.precio
    }

    agregarListaCompras(){
        listaCompras.push(new Compra(this.descripcion, this.cantidad, this.precio, this.subtotal))
    } 
}

let cantItems = parseInt(prompt("Ingresar cantidad de items a agregar"))

for (let i=0; i<cantItems; i++){
    const descripcion = prompt("Ingrese nombre del item " +(i+1));
    const cantidad = prompt("Ingrese la cantidad deseada del item " +(i+1))
    const precio = prompt("Ingrese el precio del item " +(i+1))
    const subtotal = cantidad * precio
    const compra = new Compra(descripcion, cantidad, precio, subtotal)
    compra.agregarListaCompras()
}

console.log(listaCompras)

subtotales = listaCompras.map((el) => el.subtotal)

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
console.log(total)


