const inputValue = document.getElementById('input-text');
const successText = document.getElementById('success-text');
const errorText = document.getElementById('error-text');
const submitButton = document.getElementById('btn');

/*
    a) in case we try to submit email harry@potter.com - the form should display error
    message
    b) in case we try to submit email albus@dumbledore.com the form should display
    success message
*/

let getInputValue = '';

inputValue.addEventListener('change', (e) => (getInputValue = e.target.value));

submitButton.addEventListener('click', () => {
    switch (getInputValue) {
        case 'harry@potter.com':
            errorText.style.display = 'block';
            successText.style.display = 'none';
            break;

        case 'albus@dumbledore.com':
            successText.style.display = 'block';
            errorText.style.display = 'none';
            break;
    }
});
