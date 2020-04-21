console.log('Hola Mundo!');

const $botonAgregar = document.querySelector('#boton-agregar');
$botonAgregar.onclick = function(){
    mostrarBotonCalcular();
    
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Integrante: ' //y aca podria ir agregando el numero de integrante que se suma.
    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);
    
    document.querySelector('#integrantes').appendChild($div);
}

const $botonQuitar = document.querySelector('#boton-quitar');
$botonQuitar.onclick = function(){
    const $integrante = document.querySelectorAll('.integrante');
    $integrante[$integrante.length - 1].remove();
}

const $botonCalcular = document.querySelector('#boton-calcular');
$botonCalcular.onclick = function(){
    mostrarCalculosResultados();
    mostrarBotonResetear();
    const $integrante = document.querySelectorAll('.integrante input');
    const arrayIntegrantes = [];
    for (let i = 0; i < $integrante.length; i++){
        arrayIntegrantes.push(Number($integrante[i].value));
    }
    
    const $salarioAnualMayor = document.querySelector('.salario-anual-mayor');
    $salarioAnualMayor.textContent = calcularSalarioAnualMayor();
    
    const $salarioAnualMenor = document.querySelector('.salario-anual-menor');
    $salarioAnualMenor.textContent = calcularSalarioAnualMenor();
    
    const $salarioAnualPromedio = document.querySelector('.salario-anual-promedio');
    $salarioAnualPromedio.textContent = calcularSalarioAnualPromedio();
    
    const $salarioMensualPromedio = document.querySelector('.salario-mensual-promedio');
    $salarioMensualPromedio.textContent = calcularSalarioMensualPromedio();
    
    
    function calcularSalarioAnualMayor(){
        //selecionar el numero mayor, y multiplicarlo por 12
        return Math.max(...arrayIntegrantes) * 12;
    }
    function calcularSalarioAnualMenor(){
        return Math.min(...arrayIntegrantes) * 12;
    }
    function calcularSalarioAnualPromedio(){
        let acumuladorPromedio = 0;
        for(let i = 0; i < arrayIntegrantes.length; i++){
            acumuladorPromedio += arrayIntegrantes[i];
        }
        return (acumuladorPromedio * 12) / arrayIntegrantes.length
    }
    function calcularSalarioMensualPromedio(){
        let acumuladorPromedio = 0;
        for(let i = 0; i < arrayIntegrantes.length; i++){
            acumuladorPromedio += arrayIntegrantes[i];
        }
        return acumuladorPromedio / arrayIntegrantes.length
    }
}

const $botonResetear = document.querySelector('#boton-reset');
$botonResetear.onclick = function(){
    //ocultar boton calcular, boton resetear, y calculoresultados
    ocultarBotonCalcular();
    ocultarCalculosResultados();
    ocultarBotonResetear();
    //borra integrantes
    const $integrante = document.querySelectorAll('.integrante');
    for(let i = 0; i < $integrante.length; i++){
        $integrante[i].remove();
    }
}

//MOSTAR OCULTAR
function mostrarBotonCalcular(){
    $botonCalcular.className = '';
}
function ocultarBotonCalcular(){
    $botonCalcular.className = 'oculto';
}
function mostrarCalculosResultados(){
    const $resultados = document.querySelector('#resultados')
    $resultados.className = '';
}
function ocultarCalculosResultados(){
    const $resultados = document.querySelector('#resultados')
    $resultados.className = 'oculto';
}
function mostrarBotonResetear(){
    const $botonResetear = document.querySelector('#boton-reset');
    $botonResetear.className = '';
}
function ocultarBotonResetear(){
    const $botonResetear = document.querySelector('#boton-reset');
    $botonResetear.className = 'oculto';
}
