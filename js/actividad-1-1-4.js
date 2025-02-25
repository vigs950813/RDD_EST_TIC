
function validarRespuestas() {
    // Definir las respuestas correctas
    const respuestasCorrectas = {
        q1: 'v',
        q2: 'f',
        q3: 'f',
        q4: 'f',
        q5: 'v',
        q6: 'f',
        q7: 'v',
    };

    // Inicializar variables para contar respuestas correctas e incorrectas
    let respuestasCorrectasCount = 0;
    let respuestasIncorrectasCount = 0;

    // Iterar sobre cada pregunta
    for (let i = 1; i <= 7; i++) {
        const preguntaName = 'q' + i;
        const checkboxes = document.getElementsByName(preguntaName);

        // Verificar cuántos checkboxes están marcados
        const checkboxesMarcados = Array.from(checkboxes).filter(checkbox => checkbox.checked);

        if (checkboxesMarcados.length === 1) {
            // Obtener el valor del checkbox marcado
            const valorCheckbox = checkboxesMarcados[0].value;

            // Verificar si la respuesta es correcta
            if (valorCheckbox === respuestasCorrectas[preguntaName]) {
                respuestasCorrectasCount++;
            } else {
                respuestasIncorrectasCount++;
            }
        } else if (checkboxesMarcados.length > 1) {
            // Mostrar mensaje de error si más de un checkbox está marcado en una fila
            alert('Error: Solo puedes seleccionar una opción por pregunta.');
            return; // Detener la validación si hay un error
        }
    }

    // Mostrar resultados si no hay errores
    alert(`Respuestas correctas: ${respuestasCorrectasCount}\nRespuestas incorrectas: ${respuestasIncorrectasCount}`);
}
