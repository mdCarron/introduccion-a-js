//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

$botonCalcular = document.querySelector('#calcular-tiempo');
$botonCalcular.onclick = function(){
    console.log(document.querySelectorAll('.horas').value);
    return false 
}

//crear los campos de hora, minuto, segundo .. pero tambien limitarlos al valor maximo que puede recibir
