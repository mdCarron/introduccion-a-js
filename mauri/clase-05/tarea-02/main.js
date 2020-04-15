$botonEnviar = document.querySelector('#boton-enviar');

$botonEnviar.onclick = function(){
    let primerNombreUsuario = document.querySelector('#primer-nombre');
    let segundoNombreUsuario = document.querySelector('#segundo-nombre');
    let apellidoUsuario = document.querySelector('#apellido');
    let edadUsuario = document.querySelector('#edad');
    let usuarioSaludo = document.querySelector('#usuario-saludo');
    let datosUsuario = document.querySelector('#resultado');
    
    usuarioSaludo.innerText = `Hola ${primerNombreUsuario.value}!`;
    datosUsuario.innerText =   `Nombre: ${primerNombreUsuario.value} ${segundoNombreUsuario.value}\n
                                Apellido: ${apellidoUsuario.value} \n
                                Edad: ${String(edadUsuario.value)} \n`
    
    
    return false;
}
