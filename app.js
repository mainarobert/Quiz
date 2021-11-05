const answers = ['B', 'B', 'B', 'B'];   // stores correct answers
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if (answer === answers[index]) {
            score += 25
        };
        console.log(score)
    });

    // display score on page
    // scrollTo scrolls to top of the page when user submits form
    scrollTo(0,0); // Method stored in window object, the global object in frontend js. window.scrollTo, window.console.log()...no need to refer to it because its infered to
    result.querySelector('span').textContent = `${score} %`;
    result.classList.remove('d-none');
});