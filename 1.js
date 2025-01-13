function checkAnswers() {
    const correctAnswers = document.querySelectorAll('input[value="correct"]:checked');
    const totalQuestions = document.querySelectorAll('.question').length;
    const resultDiv = document.getElementById('result');

    if (correctAnswers.length === totalQuestions) {
        resultDiv.textContent = `Great job! You answered all ${totalQuestions} questions correctly.`;
        resultDiv.className = 'result correct';
    } else {
        resultDiv.textContent = `You got ${correctAnswers.length} out of ${totalQuestions} questions correct. Try again!`;
        resultDiv.className = 'result wrong';
    }

    resultDiv.style.display = 'block';
}
