const signupForm = document.getElementById('signup-form');
const signupFormContainer = document.getElementsByClassName('signup-form')[0];
const successMessage = document.getElementsByClassName(
	'signup-form__success-message'
)[0];
const successMessageEmail = document.querySelector(
	'.signup-form__success-message p span'
);

const btnDismuss = document.getElementsByClassName('button--dismiss')[0];
btnDismuss.addEventListener('click', () => {
	successMessage.classList.remove('show');
	setTimeout(() => {
		signupFormContainer.classList.remove('submitted');
	}, 700);
});

signupForm.addEventListener('submit', (evt) => {
	evt.preventDefault();
	if (document.getElementById('email').validity.valid) {
		signupFormContainer.classList.add('submitted');
		successMessageEmail.textContent =
			document.getElementById('email').value;
		setTimeout(() => {
			successMessage.classList.add('show');
			document.getElementById('email').value = '';
		}, 700);
	}
});
