// This script is for Idea 2 in Unit 5:  Adaptive Dark Mode for Enhanced User Comfort

// Function to toggle between light and dark mode
function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
    // Check if dark mode is enabled and save the preference in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        // If dark mode is disabled (deafult mode is on), remove the preference from local storage
        localStorage.removeItem('darkMode');
    }
}

// Function to check prefernces and load dark mode setting from local storage
function loadDarkMode() {
    // Retrieve the prefernce saved for dark mode from local storage
    const darkMode = localStorage.getItem('darkMode');
    // If dark mode is enabled, add the 'dark-mode' class to the body element
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

// Initial setup for dark mode
document.addEventListener('DOMContentLoaded', () => {
    // Load the setting when the DOM content is fully loaded
    loadDarkMode();
});