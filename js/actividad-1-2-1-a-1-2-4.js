function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer) {
        const userInput = document.querySelector(`input[name=${questionName}]`).value.toLowerCase();
        const feedbackElement = document.getElementById(`feedback-${questionName}`);

        if (userInput === correctAnswer.toLowerCase()) {
            feedbackElement.textContent = '¡Respuesta correcta!';
            feedbackElement.style.color = 'green';
            correctCount++;
        } else {
            feedbackElement.textContent = 'Respuesta incorrecta.';
            feedbackElement.style.color = 'red';
            incorrectCount++;
        }
    }

    checkAnswer('q1', 'correo electrónico');
    checkAnswer('q2', 'internet');
    checkAnswer('q3', 'navegadores');
    checkAnswer('q4', 'buscadores y metabuscadores');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
