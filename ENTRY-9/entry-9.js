let highlightClass = 'highlight'; 
let textBlock = document.querySelector('button'); 
let button = document.querySelector('.clicks');

button.onclick = () => {
	if (button.getAttribute("data-text-swap") == button.innerHTML) {
	  button.innerHTML = button.getAttribute("data-text-original");
	} else {
	  button.setAttribute("data-text-original", button.innerHTML);
	  button.innerHTML = button.getAttribute("data-text-swap");
	}
  }, false;

button.onclick = () => {
	textBlock.classList.toggle(highlightClass);
};