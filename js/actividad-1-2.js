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
    checkAnswer('q3', 'b');
    checkAnswer('q4', 'b');
    checkAnswer('q5', 'b');
    checkAnswer('q6', 'b');
    checkAnswer('q7', 'b');
    checkAnswer('q8', 'b');
    checkAnswer('q9', 'b');
    checkAnswer('q10', 'b');
    checkAnswer('q11', 'b');
    checkAnswer('q12', 'b');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
