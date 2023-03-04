const form = document.querySelector('form');
const scoreInputs = document.querySelectorAll('input[name="score"]');
const submitButton = document.querySelector('button');
const title = document.querySelector('h1');
const text = document.querySelector('p');
const img = document.querySelector('img');

const thankyouTitle = document.querySelector('h1.thank-you-title');
const thankyouText = document.querySelector('p.thank-you-text');

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
	form.style.display = 'none';
	title.style.display = 'none';
	text.style.display = 'none';

	img.style.display = 'block';
	thankyouTitle.style.display = 'block';
	thankyouText.style.display = 'block';
	setTimeout(() => {
		img.classList.add('visible');
		thankyouTitle.classList.add('visible');
		thankyouText.classList.add('visible');
	}, 10);
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
