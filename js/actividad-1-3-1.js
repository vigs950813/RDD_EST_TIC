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

    checkAnswer('q1', 'memes, contenido viral');
    checkAnswer('q2', 'plataformas e-learning, videoconferencias');
    checkAnswer('q3', 'mensajería instantánea, redes sociales, foros');
    checkAnswer('q4', 'marketing por correo electrónico, redes sociales');
    checkAnswer('q5', 'podcast, Streaming de video y audio');


    const resultMessage = `Respuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}`;
    alert(resultMessage);
}
