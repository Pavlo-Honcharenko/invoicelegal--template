// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";



// Find the element with the class ".menu-item__more-links"
const moreLinks = document.querySelector('.menu-item__more-links');
// Check if the element exists
if (moreLinks) {
	// Add a click event listener to the element
	moreLinks.addEventListener('click', function () {
		// Find the closest parent element and toggle the "_open" class
		const parent = this.closest('.menu-item'); // Replace with the actual parent class
		if (parent) {
			parent.classList.toggle('_open');
		}
	});
}


