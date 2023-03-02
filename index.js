const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

const scoreInputs = document.querySelectorAll('input[name="score"]');

function handleSubmit(event) {
	event.preventDefault();

	let selectedInput;

	scoreInputs.forEach((input) => {
		if (input.checked) selectedInput = input;
	});
	console.log(`The selected number was ${selectedInput.value}`);
}
