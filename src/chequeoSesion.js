let sesionActiva = JSON.parse(sessionStorage.getItem("sesionActiva")) || undefined
const imagenLogin = document.querySelector(".linkLogin")
console.log(sesionActiva)

menuSesion = document.querySelector(".menuSesion")

if (sesionActiva != undefined){
    if (sesionActiva === "ADMIN"){
        imagenLogin.innerText = sesionActiva
        menuSesion.innerHTML = '<li><a class="pantallaAdministrador dropdown-item" href="">Administrador</a></li> <li><a class="cerrarSesion dropdown-item" href="">Cerrar sesión</a></li>'
        
        botonAdministrador = document.querySelector(".pantallaAdministrador")
        botonAdministrador.addEventListener("click", (e) => {
            e.preventDefault()
            window.location.href = "./paginas/administrador.html"
        })

        const botonCerrarSesion = document.querySelector(".cerrarSesion")
        botonCerrarSesion.addEventListener("click", (e) => {
            sessionStorage.removeItem("sesionActiva")
        })

    }else{
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
                    window.location.href = "./paginas/misDatos.html"
                }
    
            }else{
                if(sesionActiva === "ADMIN"){
                    window.location.href = "./misDatos.html"
                }
            }
            
        })

        const botonMisCompras = document.querySelector(".misCompras")
        botonMisCompras.addEventListener("click", (e) => {
            e.preventDefault()
            if (window.location.href.includes("index.html")){
                    window.location.href = "./paginas/misCompras.html"
                }else{
                    window.location.href = "./misCompras.html"
                }
        })
    }    
}else{
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





