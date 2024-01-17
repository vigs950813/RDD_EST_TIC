 // Selecciona el elemento que deseas animar
 const miTexto = document.getElementById('miTexto');

//replaces yourElement's text with "This is the new text" 
gsap.to(miTexto, {
    duration: 2,
    text: "This is the new text",
    ease: "none",
  });