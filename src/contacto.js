botonEnviarConsulta = document.querySelector("#botonEnviarConsulta")
botonEnviarConsulta.addEventListener("click", (e) => {
    e.preventDefault()
    const nombre = document.querySelector("#nombreConsulta").value.toLowerCase()
    const apellido = document.querySelector("#apellidoConsulta").value.toLowerCase()
    const telefono = Number(document.querySelector("#telefonoConsulta").value)
    const email = document.querySelector("#emailConsulta").value.toLowerCase()
    const consulta = document.querySelector("#cuerpoConsulta").value.toLowerCase()
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          telefono: telefono,
          email: email,
          consulta: consulta,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
})