botonEnviarConsulta = document.querySelector("#botonEnviarConsulta")
botonEnviarConsulta.addEventListener("click", (e) => {
    e.preventDefault()
    const nombre = document.querySelector("#nombreConsulta").value.toLowerCase()
    const apellido = document.querySelector("#apellidoConsulta").value.toLowerCase()
    const telefono = Number(document.querySelector("#telefonoConsulta").value)
    const email = document.querySelector("#emailConsulta").value.toLowerCase()
    const consulta = document.querySelector("#cuerpoConsulta").value.toLowerCase()

    if (nombre!="" && apellido!="" && telefono!="" && email!="" && consulta!=""){
        
        const enviarConsulta = async () => {
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
                .then((json) => Toastify({
                                    text: "El mensaje ha sido enviado. Pronto recibirá una respuesta.",
                                    duration: 3000,
                                    gravity: "bottom",
                                    position: "center",
                                    style: {
                                        background: 'linear-gradient(to right, #00b09b, #96c92d)'
                                    }
                                }).showToast());

                
        } 
        
        enviarConsulta()

    }else{
        Toastify({
            text: "Por favor, complete los campos requeridos.",
            duration: 3000,
            gravity: "bottom",
            position: "center",
            style: {
                background: 'linear-gradient(to right, #F55937, #E19E3E)'
            }
        }).showToast()
    }
    
    
})