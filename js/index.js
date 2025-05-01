function toggleMenu() {
	const navUl = document.querySelector('.bottom-header .middle-container nav ul');
	if (navUl.classList.contains('hide-element-nr')) {
		navUl.classList.remove('hide-element-nr');
	} else {
		navUl.classList.add('hide-element-nr');
	}
}