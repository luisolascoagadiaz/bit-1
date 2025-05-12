'use strict';
const $form = document.getElementById('form');

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const correo = $form.correo.value;
  const clave = $form.clave.value;
  
  if($form.correo.value==''){
    $form.correo.classList.add('is-invalid');
    document.getElementById('tagcorreo').innerHTML ='Correo Electrónico (Obligatorio).';
    return false;
  }

  if($form.clave.value==''){
    $form.clave.classList.add('is-invalid');
    document.getElementById('tagclave').innerHTML ='Contraseña (Obligatorio).';
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