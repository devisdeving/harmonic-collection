let highlightClass = 'highlight'; // Set up variables.
let textBlock = document.querySelector('section'); // Any selector.
let switchButton = document.querySelector('.clicks');

switchButton.onclick = () => {
	textBlock.classList.toggle(highlightClass);
};