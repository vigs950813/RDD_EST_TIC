function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer) {
        const userInput = document.querySelector(`input[name=${questionName}]`).value.toLowerCase();

        if (userInput === correctAnswer.toLowerCase()) {
            correctCount++;
        } else {
            incorrectCount++;
        }
    }

    checkAnswer('q1', 'correo electrónico');
    checkAnswer('q2', 'trabajo remoto y flexibilidad');
    checkAnswer('q3', 'acceso a la información');
    checkAnswer('q4', 'automatización y productividad');
    checkAnswer('q5', 'plataformas de e-learning');
    checkAnswer('q6', 'analítica de datos');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
