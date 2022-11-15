let highlightClass = 'highlight'; 
let textBlock = document.querySelector('button'); 
let button = document.querySelector('.clicks');
let bg = document.querySelector('section');
let backchange = 'backchange';

button.onclick = () => {
	  textBlock.classList.toggle(highlightClass);
    }; if (button.getAttribute("data-text-swap") == button.innerHTML) {
	  button.innerHTML = button.getAttribute("data-text-swap");
	} else {
	  button.setAttribute("data-text-original", button.innerHTML);
	  button.innerHTML = button.getAttribute("data-text-original");
	} false;

button.onclick = () => {
	textBlock.classList.toggle(highlightClass);
};

bg.onclick = () => {
	bg.classList.toggle(backchange);
};
