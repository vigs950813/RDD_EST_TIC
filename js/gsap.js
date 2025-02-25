 // Registra el plugin TextPlugin
 gsap.registerPlugin(TextPlugin);

 // Función para transformar el texto
 function transformarTexto(id) {
   // Selecciona el elemento que deseas animar
   const miTexto = document.getElementById('miTexto');

   // Define el texto según el ID del botón
   let nuevoTexto = "";
   if (id === "btnAcordeon1") {
     nuevoTexto = "¡Texto para el botón 1!";
   } else if (id === "btnAcordeon2") {
     nuevoTexto = "¡Texto para el botón 2!";
   }

   // Utiliza GSAP con TextPlugin para animar el texto
   gsap.to(miTexto, {
     duration: 2,
     text: nuevoTexto,
     ease: 'power2.out'
   });
 }

 // Asocia la función al clic de los botones con la clase 'btnAcordeon'
 const botonesAcordeon = document.querySelectorAll('.accordion-button');
 botonesAcordeon.forEach(function (boton) {
   boton.addEventListener('click', function () {
     transformarTexto(boton.id);
   });
 });