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



// Creating a circular diagram number 1:
document.addEventListener("DOMContentLoaded", function () {
	// We get all the elements with the class "diagram1-value"
	const values = document.querySelectorAll('.diagram1-value');
	const diagramElement = document.getElementById('diagram1');

	if (values.length > 0 && diagramElement) {

		// We convert the obtained values ​​into an array of numbers
		const amounts = Array.from(values).map(el => {
			// We remove the commas and convert the line to the number
			return parseFloat(el.textContent.replace(/,/g, ''));
		});

		// We calculate the total amount of all values
		const total = amounts.reduce((sum, current) => sum + current, 0);

		// We calculate interest for each value
		const percentages = amounts.map(amount => (amount / total) * 100);

		// We form stops for the gradient
		let gradientStops = [];
		let accumulatedPercentage = 0;
		const colors = ['#15a1cd', '#156acd', '#15cdac', '#7715CD']; // Certain colors for the gradient

		percentages.forEach((percentage, index) => {
			const start = accumulatedPercentage;
			const end = accumulatedPercentage + percentage;
			gradientStops.push(`${colors[index]} ${start.toFixed(2)}% ${end.toFixed(2)}%`);
			accumulatedPercentage += percentage;
		});

		// We use the Inline-style of Background with the gradient to the element with id "diagram1"
		const gradientStyle = `conic-gradient(${gradientStops.join(', ')})`;
		diagramElement.style.background = gradientStyle;
	}

});


// Creating a circular diagram number 2:
document.addEventListener("DOMContentLoaded", function () {
	// We get an element with a number
	const percentageElement = document.querySelector('.diagram2__number');
	const diagramElement = document.getElementById('diagram2');

	if (percentageElement && diagramElement) {
		// We convert the text as a percentage (we remove the symbol % and transform into the number)
		const percentage = parseFloat(percentageElement.textContent.replace('%', ''));

		// We check that the interest value is in the range from 0 to 100
		const validPercentage = Math.min(Math.max(percentage, 0), 100);

		// Вычисляем начальную и конечную точки для синего цвета
		const startPoint = 0;
		const endPoint = validPercentage / 2;


		// Создаем градиент: синий цвет от startPoint до endPoint, голубой на оставшуюся часть
		const gradientStyle = `conic-gradient(#0000FF ${startPoint}% ${endPoint}%, #ADD8E6 ${endPoint}% 100%)`;

		// Применяем градиент как фон для элемента с id "diagram2"
		diagramElement.style.background = gradientStyle;
	}


});



// COLOUR PICKER:
const colorPicker = document.getElementById('colorPicker');
const placeholder = document.querySelector('.color-placeholder');

if (colorPicker) {
	colorPicker.addEventListener('input', function () {
		// Показываем выбранный цвет в элементе placeholder
		placeholder.style.backgroundColor = colorPicker.value;
		colorPicker.classList.add('selected'); // Добавляем класс для скрытия текста
	});
}


