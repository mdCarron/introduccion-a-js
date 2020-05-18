console.log('Hola Mundo!');

/* 
LOGICA DEL JUEGO EN ALTO NIVEL
a nivel global se define dos arrays,uno es toda la secuencia que ejecuta la maquina, y el otro es toda la secuencia que ejecuta el usuario. y ademas se declara la ronda.

selector del boton jugar, que inicia la funcion comenzarJuego   ****se puede selccionar una etiqueta con tributo de la misma forma que se hace en css (button[type=button]).

functin comenzarJuego
    reiniciarEstado();
    manejarRonda();

function manejarRonda {
    actualizar estado('Turno de la maquina') //funcion para ir actauliazndo el alert.
    bloquearInputUsuario() //funcion para que el usuario no pueda intervenir mientras juega la computadora.

    
}
*/