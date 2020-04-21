console.log('Hola Mundo');

//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

listaNumeros = document.querySelectorAll('li');

$promedio = document.querySelector('#promedio');
$masChico = document.querySelector('#mas-chico');
$masGrande = document.querySelector('#mas-grande');
$masFrecuente = document.querySelector('#mas-frecuente');

function calcularPromedio(){
    totalLista = 0;
    for(let i = 0; i < listaNumeros.length; i++){
        totalLista += Number(listaNumeros[i].textContent);
    }
    return totalLista / listaNumeros.length
}
$promedio.textContent = calcularPromedio();

let arrayNumeros = [];
crearArrayNumeros();
function crearArrayNumeros(){
    for(let i = 0; i < listaNumeros.length; i++){
        arrayNumeros.push(Number(listaNumeros[i].textContent))
    }
}
 
function calcularMasChico(){
    return Math.min(...arrayNumeros);
}
$masChico.textContent = calcularMasChico();

function calcularMasGrande(){
    return Math.max(...arrayNumeros);
}
$masGrande.textContent = calcularMasGrande();

//Solucion de Cecilia Bobadilla
function calcularMasFrecuente(){
    let masFrecuente = 1
    let frecuencia = 0
    let nMasFrecuente;
    for (let i = 0; i < arrayNumeros.length; i++) {
        for (let j = i; j < arrayNumeros.length; j++) {
            if (arrayNumeros[i] === arrayNumeros[j]) {
                frecuencia++;
            }
            if (frecuencia > masFrecuente) {
                masFrecuente = frecuencia;
                nMasFrecuente = arrayNumeros[i];
            }
        }
        frecuencia = 0;
    }
    return nMasFrecuente;
}
$masFrecuente.textContent = calcularMasFrecuente();

