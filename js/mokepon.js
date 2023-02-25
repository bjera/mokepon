let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById ("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"
    
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)

    let botonReiniciar=document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display = "none"
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarAtaque = document.getElementById ("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"
    let sectionSeleccionarMascota = document.getElementById ("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    let inputHipopito = document.getElementById("hipopito")
    let inputCapibatita = document.getElementById("capibatita")
    let inputRatifuega = document.getElementById("ratifuega")
    let spanMascotaJugador = document.getElementById ("mascota-jugador")
    
    

    if (inputHipopito.checked) { 
        spanMascotaJugador.innerHTML = "Hipopito"
    }
    else if (inputCapibatita.checked) {
         spanMascotaJugador.innerHTML = "Capibatita"
    }
    else if (inputRatifuega.checked) {
        spanMascotaJugador.innerHTML = "Ratifuega"
    }
    else {
        alert ("Debes seleccionar una mascota")
    }

    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    let mascotaAleatoria=aleatorio(1,3)
    let spanMascotaEnemigo=document.getElementById('mascota-enemigo')
    if(mascotaAleatoria == 1) { 
        spanMascotaEnemigo.innerHTML = "Hipopito"
    } else if(mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML='Capibatita'
    } else {
        spanMascotaEnemigo.innerHTML='Ratifuega'
    }
}

function ataqueFuego () {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueTierra () {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
    
}
function ataqueAgua () {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
    
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo ="FUEGO"
    }else if (ataqueAleatorio == 2) {
        ataqueEnemigo ="AGUA"
    } else {
        ataqueEnemigo ="TIERRA"
    }
    combate()
}
function combate(){
    let spanVidasJugador = document.getElementById ("vidas-jugador")
    let spanVidasEnemigo = document.getElementById ("vidas-enemigo")
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATASTE")
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
        crearMensaje("GANASTE") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
        crearMensaje("GANASTE") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("GANASTE") 
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo 
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        }
   
        revisarVidas()

}
function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICIDADES ERES EL VENCEDOR") 
    } else if (vidasJugador ==0) {
        crearMensajeFinal("QUE LASTIMA EL ENEMIGO TE HA VENCIDO") 
    }
}


function crearMensaje(resultado) { 
    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelEnemigo = document.getElementById("ataque-enemigo")
    let ataquesDELJugador = document.getElementById("ataque-jugador")

    
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelJugador)
    ataquesDELJugador.appendChild(nuevoAtaqueDelEnemigo)

    }

function crearMensajeFinal(resultadoFinal) { 
    let sectionMensajes=document.getElementById("resultado")

    sectionMensajes.innerHTML= resultadoFinal

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true

    let botonReiniciar=document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click', reiniciarJuego)
    botonReiniciar.style.display = "block"

    botonReiniciar.addEventListener('click', reiniciarJuego)
    }
function reiniciarJuego() {
        location.reload()

    }


function aleatorio(min, max) {   
    return Math.floor(Math.random() * (max - min + 1) + min)
 }
   
   



window.addEventListener("load", iniciarJuego)