//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

$botonCalcular = document.querySelector('#calcular-tiempo');
$botonCalcular.onclick = function(){
    calcuarHoras();
    calcularMinutos();
    calcularSegundos();
    
    return false  
}

function calcuarHoras (){
    let horas = document.querySelectorAll('.horas')
    //console.log(horas);

    totalHoras = 0;
    for(let i = 0; i < horas.length; i++){
        //console.log(Number(horas[i].value));
        totalHoras += Number(horas[i].value);
    }
    //console.log(totalHoras);
    
    tiempoTotalHoras = document.querySelector('#tiempo-total-horas');
    tiempoTotalHoras.innerText = totalHoras;
}

function calcularMinutos(){
    let minutos = document.querySelectorAll('.minutos');
    totalMinutos = 0;

    for(let i = 0; i < minutos.length; i++){
        totalMinutos += Number(minutos[i].value);
    }

    let tiempoTotalMinutos = document.querySelector('#tiempo-total-minutos');
    tiempoTotalMinutos.innerText = totalMinutos;
}

function calcularSegundos(){
    let segundos = document.querySelectorAll('.segundos');
    totalSegundos = 0;

    for(let i = 0; i < segundos.length; i++){
        totalSegundos += Number(segundos[i].value);
    }

    let tiempoTotalSegundos = document.querySelector('#tiempo-total-segundos');
    tiempoTotalSegundos.innerText = totalSegundos;
}
