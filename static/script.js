function toggleDarkMode() {
	const body = document.body;
	const themeStyleLink = document.getElementById("theme-style");

	// Add an event listener for the 'transitionend' event
	themeStyleLink.addEventListener("transitionend", () => {
		// Update the theme link after the transition is complete
		themeStyleLink.removeEventListener("transitionend", arguments.callee);
		themeStyleLink.href = body.classList.contains("dark-mode")
			? "{{ url_for('static', filename='styles.css') }}"
			: "{{ url_for('static', filename='dark-theme.css') }}";
	});

	// Toggle the dark mode class
	body.classList.toggle("dark-mode");
}
