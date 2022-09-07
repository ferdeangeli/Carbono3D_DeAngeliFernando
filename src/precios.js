const listaPrecios = []

const obtenerPrecios = async () => {
    await fetch("../precios.json")
        .then((resp) => resp.json())
        .then((data) => listaPrecios.push(data))

}

obtenerPrecios()
console.log(listaPrecios)