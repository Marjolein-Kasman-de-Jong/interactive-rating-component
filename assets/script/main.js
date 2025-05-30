const cardHowDidWeDo = document.getElementById('how-did-we-do');
const cardThankYou = document.getElementById('thank-you');
const radioButtons = document.querySelectorAll('input[name="score"]');
const submitButton = document.getElementById('submit');

let score;
const givenScore = document.getElementById('given-score');

// Enable submit button when score is selected
radioButtons.forEach(button => {
    button.addEventListener('change', () => {
        submitButton.disabled = false;
    });
});

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Switch cards
    cardHowDidWeDo.classList.remove('active');
    cardThankYou.classList.add('active');

    // Insert score in thank you card
    score = document.querySelector('input[name="score"]:checked').value;
    givenScore.textContent = score;
});

