'use strict';
const $form = document.getElementById('frminicio');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const correo = $form.correo.value;
  const clave = $form.clave.value;
  
  if($form.correo.value==''){
    $form.correo.classList.add('is-invalid');
    document.getElementById('tagcorreo').innerHTML =' Correo Electrónico (Obligatorio).';
    return false;
  }

  if($form.clave.value==''){
    $form.clave.classList.add('is-invalid');
    document.getElementById('tagclave').innerHTML =' Contraseña (Obligatorio).';
    return false;
  }
 
  if($form.clave.value=='1234'){
    $form.reset();
    document.getElementById('msj').classList.remove('alert-danger');
    document.getElementById('msj').classList.add('alert-success');
    document.getElementById('msj').innerHTML ='El correo '+correo+' esta Autorizado';
    document.getElementById('btn').innerHTML ='<span class="spinner-border spinner-border-sx" aria-hidden="true"></span>';
    window.setTimeout(function () {window.location.href = "panel.html";}, 3000)
  }else{
    document.getElementById('msj').classList.remove('alert-success');
    document.getElementById('msj').classList.add('alert-danger');
    document.getElementById('msj').innerHTML ='El correo '+correo+' no esta Autorizado';
    document.getElementById('btn').innerHTML ='Intentar Nuevamente';
  }
});

$form.correo.addEventListener('click', (event) => {
    $form.correo.value='';
    $form.correo.classList.remove('is-invalid');
});

$form.clave.addEventListener('click', (event) => {
    $form.clave.value='';
    $form.clave.classList.remove('is-invalid');
});


// Validación y envio del Formulario de Contacto.
function enviarmensaje(){
  const $frmcontacto = document.getElementById('frmcontacto');
  const nombre = $frmcontacto.nombre.value;
  const telefono = $frmcontacto.telefono.value;
  const correo = $frmcontacto.telefono.value;
  const mensaje = $frmcontacto.telefono.value;

  if($frmcontacto.nombre.value==''){
    $frmcontacto.nombre.classList.add('is-invalid');
    document.getElementById('tagnombre').innerHTML =' Nombre y Apellido (Obligatorio).';
    return false;
  }
  $frmcontacto.nombre.classList.remove('is-invalid');


  if($frmcontacto.telefono.value==''){
    $frmcontacto.telefono.classList.add('is-invalid');
    document.getElementById('tagtelefono').innerHTML =' Teléfono (Obligatorio).';
    return false;
  }
  $frmcontacto.telefono.classList.remove('is-invalid');


  if($frmcontacto.correo.value==''){
    $frmcontacto.correo.classList.add('is-invalid');
    document.getElementById('tagcorreo').innerHTML =' Correo Electrónico (Obligatorio).';
    return false;
  }
  $frmcontacto.correo.classList.remove('is-invalid');


  if($frmcontacto.mensaje.value==''){
    $frmcontacto.mensaje.classList.add('is-invalid');
    document.getElementById('tagmensaje').innerHTML =' Mensaje (Obligatorio).';
    return false;
  }
  $frmcontacto.mensaje.classList.remove('is-invalid');

  document.getElementById('msjcontacto').innerHTML =`<div class="alert alert-success" role="alert">${nombre}, Su mensaje fue enviado, pronto recibirá
  respuesta al correo ${correo} o al whatsapp ${telefono}.</div>`;

  $frmcontacto.nombre.value='';
  $frmcontacto.telefono.value='';
  $frmcontacto.correo.value='';
  $frmcontacto.mensaje.value='';

}