document.addEventListener('DOMContentLoaded', function () {
	// navigation
	let menu = document.getElementById('menu');
	let menuBtn = document.getElementById('menu-btn');
	let barsIcon = document.getElementById('bars-icon');

	function openMenu() {
		menu.classList.add('visible');
		menuBtn.setAttribute('aria-expanded', 'true');
		menuBtn.setAttribute('aria-label', 'Close menu');
		barsIcon.src = 'assets/xmark.svg';
	}

	function closeMenu() {
		menu.classList.remove('visible');
		menuBtn.setAttribute('aria-expanded', 'false');
		menuBtn.setAttribute('aria-label', 'Open menu');
		barsIcon.src = 'assets/bars.svg';
	}

	function toggleMenu() {
		if (menu.classList.contains('visible')) {
			closeMenu();
		} else {
			openMenu();
		}
	}

	menuBtn.addEventListener('click', toggleMenu);

	// contact form
	let form = document.getElementById('contact-form');
	form.addEventListener('submit', function (event) {
		event.preventDefault();

		let nameInput  = document.getElementById('name');
		let emailInput = document.getElementById('email');
		let isValid    = true;

		// Simple required + email format validation
		if (!nameInput.value.trim()) {
			nameInput.setCustomValidity('Please enter your name.');
			nameInput.reportValidity();
			isValid = false;
		} else {
			nameInput.setCustomValidity('');
		}

		if (isValid) {
			if (!emailInput.value.trim()) {
				emailInput.setCustomValidity('Please enter your email address.');
				emailInput.reportValidity();
				isValid = false;
			} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
				emailInput.setCustomValidity('Please enter a valid email address.');
				emailInput.reportValidity();
				isValid = false;
			} else {
				emailInput.setCustomValidity('');
			}
		}

		if (isValid) {
			alert('Form submitted successfully');
			form.reset();
		}
	});

	// Clear custom validity on input so error clears as user types
	document.getElementById('name').addEventListener('input', function () {
		this.setCustomValidity('');
	});
	document.getElementById('email').addEventListener('input', function () {
		this.setCustomValidity('');
	});

	// back to top
	let backToTopBtn = document.getElementById('back-to-top');

	function handleScroll() {
		if (window.scrollY > 100) {
			backToTopBtn.classList.add('visible');
		} else {
			backToTopBtn.classList.remove('visible');
		}
	}

	window.addEventListener('scroll', handleScroll, { passive: true });

	handleScroll();
});
