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
    checkAnswer('q2', 'www');
    checkAnswer('q3', 'navegadores');
    checkAnswer('q4', 'buscadores y metabuscadores');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
