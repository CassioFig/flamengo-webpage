function toggleMenu() {
	const navUl = document.querySelector('.bottom-header .middle-container nav ul');
	if (navUl.classList.contains('hide-element-nr')) {
		navUl.classList.remove('hide-element-nr');
	} else {
		navUl.classList.add('hide-element-nr');
	}
}

function toggleAccordion(headerElement) {
	const accordion = headerElement.parentElement;
	accordion.classList.toggle('active');
}

window.addEventListener('scroll', function() {
  const btn = document.getElementById('back-to-top');
  if (window.scrollY > 200) {
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
  }
});
document.getElementById('back-to-top').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};