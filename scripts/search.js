// This code is for Proposal 3 in Unit 6: Implementation of Search the Event button

// Script is executed when the DOM is loaded
$(document).ready(function() {
    // Event listener when the user clicks on search button
    $('#searchButton').on('click', function() {

        // Extract the value entered in the search field
        var searchTerm = $('#searchInput').val().toLowerCase();

        // Iterates over each event card to find the event searched
        $('.event-card').each(function() {
            var eventTitle = $(this).find('h3').text().toLowerCase();
            if (eventTitle.includes(searchTerm)) {
                $(this).show(); // matched then show the event card
            } else {
                $(this).hide(); // Otherwise, hide the event card
            }
        });
    });
});
