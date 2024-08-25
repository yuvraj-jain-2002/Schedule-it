// Code is from FullCalendar.io Cited in Learning Diary

// Below code is to setup the FullCalendar to view it on the web page.

let calendar;

// Script is executed when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

    // Fetches the HTML element
    var calendarEl = document.getElementById('calendar');

    // Instantiate and Initialize FullCalendar
    calendar = new FullCalendar.Calendar(calendarEl, {

        // Setting the header with options to change the layout of the calendar
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listDay'
        },

        // Setting the layout of the calendar
        initialView: 'dayGridMonth',

        // Setting the timezone to current timezone
        timeZone: 'America/Toronto',

        // Setting to let events in the calendar be editable
        editable: true,

        // Setting to let dates on the calendar be selected
        selectable: true,

        // Event listener for date click
        dateClick: function(info) {
            // Detect the page and show the appropriate form
            if (window.location.pathname.includes('manage-event.html')) {
                showCreateEventForm(info.dateStr);
            } else {
                showTimeBlockForm(info.dateStr);
            }
        }
    });

    // Renders the calendar on the web page
    calendar.render();
});
