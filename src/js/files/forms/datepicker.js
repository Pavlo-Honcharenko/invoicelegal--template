/* Календар */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import datepicker from 'js-datepicker';

if (document.querySelector('[data-datepicker]')) {
	const picker = datepicker('[data-datepicker]', {
		customDays: ["Mo", "Tu", "We", "Th", "Fri", "Sa", "Su"],
		customMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		overlayButton: 'Apply',
		overlayPlaceholder: 'Year (4 digits)',
		startDay: 1,
		formatter: (input, date, instance) => {
			// Форматирование только месяца и года
			const value = date.toLocaleDateString('en', {
				month: 'long', // Полное название месяца
				year: 'numeric' // Число года
			});
			input.value = value;
		},
		onSelect: function (input, instance, date) {
			// Можно добавить дополнительную логику при выборе даты
		}
	});
	flsModules.datepicker = picker;
}
