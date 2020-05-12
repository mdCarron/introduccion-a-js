/* pruebaValidarNombre();
pruebaValidarCiudad();
pruebaValidarComportamiento();
pruebaValidarRegalo();

function pruebaValidarNombre(){
    console.assert(
        validarNombre('11111111') === 'El campo nombre solo acepta letras.',
        'validarNombre no valida que el usuario ingreso un nombre solo con letras.'
    );

    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter.', 
        'validarNombre no valida con un string vacio.'
    );

    console.assert(
        validarNombre('111111111111111111111111111111111111111111111111111') === 'Este campo debe tener menos de 50 caracteres.',
        'validarNombre no valida que el campo tenga menos de 50 caracteres.'
    );

}

function pruebaValidarCiudad(){
    console.assert(
        validarCiudad('Buenos Aires') === '',
        'validarCiudad no valida que se seleciono una opcion valida de ciudad.'
    );
    console.assert(
        validarCiudad('') === 'Por favor seleccionar una ciudad.', 
        'validarCiudad no valida que hay una ciudad seleccionada..'
    );
}

function pruebaValidarComportamiento(){
    console.assert(
        validarComportamiento('muy_bueno') === '',
        'validarComportamiento no valida que se seleciono una opcion valida.'
    );
    console.assert(
        validarComportamiento('') === 'Por favor seleccionar una opcion.',
        'validarComportamiento no valida que haya una opcion selecionada.'
    )
}

function pruebaValidarRegalo(){
    console.assert(
        validarRegalo('Regalo') === '',
        'validarRegalo no valida que se ingreso un texto valido en el campo.'
    );
    console.assert(
        validarRegalo('') === 'Por favor dejar un mensaje para papa noel.',
        'validarRegalo no valida que en el campo de texto esta vacio.'
    )
    console.assert(
        validarRegalo('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 'Estas pidiendo mucho a papa noel',
        'validarRegalo no valida que supera el maximo de 100 caracteres.'
    )
    console.assert(
        validarRegalo('...,.,.,') === 'El campo de la descripcion solo acepta letras y numeros.',
        'validarRegalo no valida que no se ingresaron solo letras y numeros en el capo de texto.'

    );
}
//al validar las opciones tienen que ser las mismas que las escritas en la funcion, porque sino no funciona. Ademas siempre aclarar bien cual es el mensaje de error para identificar mas facil de donde viene el problema.
 */

//hay que validar que las funciones que estan haciendo aperaciones matematicas den bien.