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
    checkAnswer('q2', 'b');
    checkAnswer('q3', 'c');
    checkAnswer('q4', 'a');
    checkAnswer('q5', 'b');
    checkAnswer('q6', 'c');
    checkAnswer('q7', 'b');
    checkAnswer('q8', 'a');
    checkAnswer('q9', 'c');
    checkAnswer('q10', 'a');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
