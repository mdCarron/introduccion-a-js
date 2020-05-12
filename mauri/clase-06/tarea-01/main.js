$botonSiguiente = document.querySelector('#boton-siguiente');
$botonSiguiente.onclick = function (){
    
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);
    crearIntegrantes(cantidadIntegrantes);
    mostrarBotonCalcular();
    return false
}

function crearIntegrantes(cantidadIntegrantes){
    for (let i = 0; i < cantidadIntegrantes; i++){
        crearIntegrante(i);
    }
}

function crearIntegrante(indice){
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante #' + (indice + 1);
    
    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}

//CALCULOS
$botonCalcular = document.querySelector('#boton-calcular');
$botonCalcular.onclick = function(){
    const $edades = document.querySelectorAll('.integrante input');
    const arrayEdades = [];
    for (let i = 0; i < $edades.length; i++){
        arrayEdades.push(Number($edades[i].value));
    }
    const $edadMayor = document.querySelector('#edad-mayor');
    $edadMayor.textContent = calcularEdadMayor();
    function calcularEdadMayor(){
        return Math.max(...arrayEdades);
    }
    const $edadMenor = document.querySelector('#edad-menor');
    $edadMenor.textContent = calcularEdadMenor();
    function calcularEdadMenor(){
        return Math.min(...arrayEdades);
    }
    const $edadPromedio = document.querySelector('#edad-promedio');
    $edadPromedio.textContent = calcularEdadPromedio();
    function calcularEdadPromedio(){
        let totalEdades = 0;
        for(let i = 0; i < arrayEdades.length; i++){
            totalEdades += arrayEdades[i];
        }
        return totalEdades / arrayEdades.length
    }

    mostrarIntegrantesCalculos();
}

//MOSTAR OCULTAR
function mostrarBotonCalcular(){
    $botonCalcular.className = '';
}
function ocultarBotonCalcular(){
    $botonCalcular.className = 'oculto';
}
function mostrarIntegrantesCalculos(){
    $integrantesCalculos = document.querySelector('.integrantes-calculos-oculto')
    $integrantesCalculos.className = '';
}
