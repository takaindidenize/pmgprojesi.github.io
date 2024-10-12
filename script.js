document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const closeButton = document.querySelector('.close-button');

    popup.style.display = 'flex';

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    const surveyForm = document.getElementById('survey-form');
    surveyForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        alert('Anketiniz gönderildi!');

        surveyForm.reset(); 
    });
});
