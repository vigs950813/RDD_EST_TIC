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

    checkAnswer('q1', 'c');
    checkAnswer('q2', 'c');
    checkAnswer('q3', 'b');
    checkAnswer('q4', 'a');
    checkAnswer('q5', 'b');
    checkAnswer('q6', 'a');
    checkAnswer('q7', 'c');
    checkAnswer('q8', 'b');
    checkAnswer('q9', 'c');
    checkAnswer('q10', 'b');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
