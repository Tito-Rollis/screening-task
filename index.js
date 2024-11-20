const inputValue = document.getElementById('input-text');
const successText = document.getElementById('success-text');
const errorText = document.getElementById('error-text');
const submitButton = document.getElementById('btn');

let getInputValue = '';

// get the value from input text then put in to getInputValue variable
inputValue.addEventListener('change', (e) => (getInputValue = e.target.value));

// add submit handler for the input value including the conditional logic
submitButton.addEventListener('click', () => {
    switch (getInputValue) {
        case 'harry@potter.com':
            errorText.style.display = 'block';
            successText.style.display = 'none';
            inputValue.style.border = '1px solid #FDA29B';
            break;

        case 'albus@dumbledore.com':
            successText.style.display = 'block';
            errorText.style.display = 'none';
            inputValue.style.border = '1px solid #d1d5db';
            break;
    }
});
