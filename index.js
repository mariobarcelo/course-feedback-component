const form = document.querySelector('form');
const scoreInputs = document.querySelectorAll('input[name="score"]');
const submitButton = document.querySelector('button');

const firstView = document.querySelector('.first-view');
const secondView = document.querySelector('.second-view');

form.addEventListener('submit', handleSubmit);

form.addEventListener('click', (event) => {
	if (event.target.nodeName === 'INPUT') {
		console.log('Input!');
		submitButton.disabled = false;
		submitButton.style.cursor = 'pointer';
	}
});

function changeView() {
	firstView.style.display = 'none';
	secondView.style.display = 'block';
}

function handleSubmit(event) {
	event.preventDefault();

	console.log('Form submited');
	let selectedInput;

	scoreInputs.forEach((input) => {
		if (input.checked) selectedInput = input;
	});
	console.log(`The selected number was ${selectedInput.value}`);
	changeView();
}
