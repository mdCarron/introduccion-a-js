function calcularSueldoAnual (sueldoMensual){
    const mesesEnUnAnio = 12;
    return sueldoMensual * mesesEnUnAnio;
}

botonCalcular = document.querySelector('#boton-calcular');
botonCalcular.onclick = function(){
    let sueldoMensualUsuario = document.querySelector('#sueldo-mensual');
    let sueldoAnualUsuario = document.querySelector('#sueldo-anual');

    sueldoAnualUsuario.value = calcularSueldoAnual(sueldoMensualUsuario.value);
    
    return false
}