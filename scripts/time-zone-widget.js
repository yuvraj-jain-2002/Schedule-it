// This script is for Proposal 2 in Unit 7: Implementation of the TimeZone widget 

// Function to fetch current time based on the given timezone as input
function fetchTimeFromTimezone() {
    // Fetch the input from the user
    const input = document.getElementById('timezone-input').value;

    // API key for accessing the time zone database
    const apiKey = 'TBI62JP75SUY';

    // URL where the API call will be made with the given input
    const apiURL = `https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=zone&zone=${input}`;

    // Fetch data from the time zone API, where the return resposne will a JSON object
    $.getJSON(apiURL, function(data) {

        // If the input is invalid, the API returns the details of Wallis and Futuna as default
        if (data.countryName === "Wallis and Futuna") {
            $('#timezone-result').text('Invalid timezone. Please try again.');
        } 
        // When the input is valid
        else if (data.formatted) {
            const dateTime = new Date(data.formatted);
            $('#timezone-result').text(`Current time in ${input}: ${dateTime.toLocaleString()}`);
        } 
        // Deafult case
        else {
            $('#timezone-result').text('Invalid timezone. Please try again.');
        }
    }).fail(function() {
        $('#timezone-result').text('Error fetching the time. Please try again later!');
    });
}
