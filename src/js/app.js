document.addEventListener('DOMContentLoaded', function() {

    eventListeners();
});


function eventListeners() {
    const mobileMenu = document.querySelector('.mobile-menu');
 
    mobileMenu.addEventListener('click', navegacionResponsive)
 
    //muestra campos condicionales
    const metodoContacto = document.querySelectorAll('input[name="contacto[contacto]"]');
    metodoContacto.forEach(input => input.addEventListener('click', mostrarMetodosContacto)); 
    
 }
 
 function navegacionResponsive() {
     const navegacion = document.querySelector('.navegacion');
 
     // toggle si tiene la clase la agrega sino la quita
     navegacion.classList.toggle('mostrar');
 }