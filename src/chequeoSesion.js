let sesionActiva = JSON.parse(sessionStorage.getItem("sesionActiva")).toUpperCase()
const imagenLogin = document.querySelector(".linkLogin")
console.log(sesionActiva)

menuSesion = document.querySelector(".menuSesion")

if (sesionActiva != undefined){
    imagenLogin.innerText = sesionActiva
    menuSesion.innerHTML = '<li><a class="misDatos dropdown-item" href="">Mis Datos</a></li> <li><a class="misCompras dropdown-item" href="">Mis compras</a></li> <li><a class="cerrarSesion dropdown-item" href="">Cerrar sesión</a></li>'

    const botonCerrarSesion = document.querySelector(".cerrarSesion")
    botonCerrarSesion.addEventListener("click", (e) => {
        sessionStorage.removeItem("sesionActiva")
    })

    const botonMisDatos = document.querySelector(".misDatos")
    botonMisDatos.addEventListener("click", (e) => {
        e.preventDefault()
        if (window.location.href.includes("index.html")){
            if(sesionActiva === "ADMIN"){
                window.location.href = "./paginas/administrador.html"
                                    
            }else{
                window.location.href = "./paginas/misDatos.html"
            }

        }else{
            if(sesionActiva === "ADMIN"){
                window.location.href = "./administrador.html"
                    
            }else{
                window.location.href = "./misDatos.html"
            }
        }
        
    })

    const botonMisCompras = document.querySelector(".misCompras")
    botonMisCompras.addEventListener("click", (e) => {
        e.preventDefault()
        if (window.location.href.includes("index.html")){
            if(sesionActiva === "ADMIN"){
                window.location.href = "./paginas/administrador.html"
                    
            }else{
                window.location.href = "./paginas/misCompras.html"
            }

        }else{
            if(sesionActiva === "ADMIN"){
                window.location.href = "./administrador.html"
                    
            }else{
                window.location.href = "./misCompras.html"
            }
        }
    })
}

if(!sesionActiva){
    menuSesion.innerHTML = '<li><a class="iniciarSesion dropdown-item" href="">Iniciar Sesión</a></li>'
    const botonIniciarSesion = document.querySelector(".iniciarSesion")
    botonIniciarSesion.addEventListener("click", (e) => {
        e.preventDefault()
        if (window.location.href.includes("index.html")){
            window.location.href = "./paginas/login.html"
        }else{
            window.location.href = "./login.html"
        }
    })
}





