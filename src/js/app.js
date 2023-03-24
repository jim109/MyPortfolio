document.addEventListener('DOMContentLoaded', function() {

    eventListeners();

    darkMode();
});

function darkMode() {

    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    if(prefiereDarkMode.matches){
        document.body.classList.add('dark-mode')
    }else {
        document.body.classList.remove('dark-mode');
    }

    prefiereDarkMode.addEventListener('change', function() {
        if(prefiereDarkMode.matches){
            document.body.classList.add('dark-mode')
        }else {
            document.body.classList.remove('dark-mode');
        }
    })

    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode')
    })
}

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