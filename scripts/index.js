// This script is for Idea 1 in Unit 5: Collapsable Lists on the Home Pag to Minimize Clutter

// Add an event listener to ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // switchOption function to toggle the collapse and expand state of a section
    function switchOption(collapsible) {
        // Get the next sibling element, which contains the content to be shown or hidden
        var content = collapsible.nextElementSibling;
        // Get the summary and full-content elements within the content section
        var summary = content.querySelector('.summary');
        var fullContent = content.querySelector('.full-content');
        // Check the current display state of the summary element
        if (summary.style.display === "none") {
            // If the summary is hidden, show it and hide the full content
            summary.style.display = "block";
            fullContent.style.display = "none";
        } else {
            // If the summary is visible, hide it and show the full content
            summary.style.display = "none";
            fullContent.style.display = "block";
        }
    }

    // Select all elements with the class 'collapsible'
    var collapsibles = document.querySelectorAll('.collapsible');
    // Add a click event listener to each collapsible element
    collapsibles.forEach(function(collapsible) {
        collapsible.addEventListener('click', function() {
            // Call the switchOption function when the collapsible element is clicked
            switchOption(collapsible);
        });
    });
});