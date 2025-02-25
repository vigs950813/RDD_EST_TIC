function checkAnswers() {
    let correctCount = 0;
    let incorrectCount = 0;

    function checkAnswer(questionName, correctAnswer) {
        const selectedAnswer = document.querySelector(`input[name=${questionName}]:checked`);

        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswer) {
                correctCount++;
            } else {
                incorrectCount++;
            }
        } else {
            incorrectCount++;
        }
    }

    checkAnswer('q1', 'd');
    checkAnswer('q2', 'b');
    checkAnswer('q3', 'c');
    checkAnswer('q4', 'b');
    checkAnswer('q5', 'c');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
