//GLOBALES
let secuenciaUsuario = [];
let secuenciaMaquina = [];
let ronda = 0;


//JUEGO
document.querySelector('#jugar').onclick = comenzarJuego;

actualizarEstado('Apretá Jugar! para comenzar');
actualizarNumeroRonda('~');
bloquearInputUsuario();

function comenzarJuego() {
    reiniciarEstado();
    manejarRonda();
}


function manejarRonda() {
    actualizarEstado('Turno de la maquina...');
    bloquearInputUsuario();

    const $nuevoCuadro = obtenerCuadroAleatorio();
    secuenciaMaquina.push($nuevoCuadro);

    secuenciaMaquina.forEach(
        function($cuadro, index) {
            const RETRASO_MS = (index + 1) * 1000;
            setTimeout(
                function(){
                    resaltar($cuadro);
                }, RETRASO_MS
            )
        }
    )

    const RETRASO_TURNO_JUGADOR = (secuenciaMaquina.length + 1) * 1000;
    setTimeout(function(){
        actualizarEstado('Turno del jugador...');
        desbloquearInputUsuario();
    }, RETRASO_TURNO_JUGADOR);

    secuenciaUsuario = [];
    ronda++;
    actualizarNumeroRonda(ronda);
}

function manejarInputUsuario(e) {
    const $cuadro = e.target;
    resaltar($cuadro);
    secuenciaUsuario.push($cuadro);

    const $cuadroMaquina = secuenciaMaquina[secuenciaUsuario.length - 1];
    if ($cuadro.id !== $cuadroMaquina.id){
        perder();
        return
    }

    if (secuenciaUsuario.length === secuenciaMaquina.length){
        bloquearInputUsuario();
        setTimeout(manejarRonda, 1000);
    }
}


//FUNCIONES
function reiniciarEstado() {
    secuenciaUsuario = [];
    let secuenciaMaquina = [];
    let ronda = 0;
}


function actualizarEstado (estado, error = false){
    const $estado = document.querySelector('#estado');
    $estado.innerText = estado;

    if(error){
        $estado.classList.remove('alert-primary');
        $estado.classList.add('alert-danger');
    }else{
        $estado.classList.remove('alert-danger');
        $estado.classList.add('alert-primary');
    }
}

function actualizarNumeroRonda(ronda) {
    document.querySelector('#ronda').innerText = ronda;
}

function obtenerCuadroAleatorio() {
    const $cuadros = document.querySelectorAll('.cuadro');
    const $indice = Math.floor(Math.random() * $cuadros.length);

    return $cuadros[$indice]
}

function resaltar($cuadro) {
    $cuadro.style.opacity = 1;
    setTimeout(function(){
        $cuadro.style.opacity = 0.5;
    }, 500);
}

function bloquearInputUsuario(){
    document.querySelectorAll('.cuadro').forEach(
        function($cuadro){
            $cuadro.onclick = function(){

            }
        })
}

function desbloquearInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function($cuadro){
        $cuadro.onclick = manejarInputUsuario;
    })
}

function perder(){
    bloquearInputUsuario();
    actualizarEstado(`Perdiste! Duraste ${ronda} ronda/s. Podes comenzar de nuevo aprentando en Jugar!`, true);
}