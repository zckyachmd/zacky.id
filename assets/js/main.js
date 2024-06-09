document.addEventListener("DOMContentLoaded", () => {
	// Mobile menu toggle
	const mobileMenuButton = document.querySelector(".mobile-menu-button");
	const mobileMenu = document.querySelector(".navigation-menu");

	mobileMenuButton.addEventListener("click", () => {
		mobileMenu.classList.toggle("hidden");
	});
});
