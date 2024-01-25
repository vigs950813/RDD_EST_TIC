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

    checkAnswer('q1', 'b');
    checkAnswer('q2', 'f');
    checkAnswer('q3', 'a');
    checkAnswer('q4', 'c');
    checkAnswer('q5', 'e');

    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
