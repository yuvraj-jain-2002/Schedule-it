// This script is for Idea 3 in Unit 5: Combined Header Menu

// Function to expand or collapse the header menu
function expandOrCollapseMenu() {
    const navList = document.getElementById('nav-list');
    // Toggle menu state and store the preference in local storage
    if (navList.style.display === 'flex' || navList.style.display === '') {
        navList.style.display = 'none';
        localStorage.setItem('menuState', 'collapsed');
    } else {
        navList.style.display = 'flex';
        localStorage.setItem('menuState', 'expanded');
    }
}

// Function to initialize and setup menu
function initializeMenu() {
    const navList = document.getElementById('nav-list');
    // Retrieve the prefernce saved about the menu state from local storage and apply it
    const menuState = localStorage.getItem('menuState');
    if (menuState === 'expanded') {
        navList.style.display = 'flex';
    } else {
        // Default state (light mode) if no previous state is saved
        navList.style.display = 'none';
    }
}

// Initial setup for menu
document.addEventListener('DOMContentLoaded', () => {
    // Load menu state when the DOM content is fully loaded
    initializeMenu();
});
