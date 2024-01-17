 // Registra el plugin TextPlugin
 gsap.registerPlugin(TextPlugin);

 // Definir la función para transformar el texto
 function transformarTexto() {
   // Selecciona el elemento que deseas animar
   const miTexto = document.getElementById('miTexto');

   // Utiliza GSAP con TextPlugin para animar el texto
   gsap.to(miTexto, {
     duration: 2,
     text: "¡Hola, soy un texto animado!",
     ease: 'power2.out'
   });
 }

  // Asocia la función al clic del botón con id 'btnAcordeon'
  document.getElementById('btnAcordeon').addEventListener('click', transformarTexto);