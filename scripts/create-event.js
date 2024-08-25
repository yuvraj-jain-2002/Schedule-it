// This code is for Proposal 2 in Unit 6: Implementation of Event Creation

function showCreateEventForm(dateStr) {
    // Select the section where the form needs to be inserted
    const createEventSection = document.querySelector('.create-event-section');

    // Create the form HTML
    const formHTML = `
        <div class="new-event-form">
            <h3>Create Event for ${dateStr}</h3>
            <form id="createEventForm">
                <label for="eventTitle">Event Title:</label>
                <input type="text" id="eventTitle" name="eventTitle" required>
                <br>
                <label for="startTime">Start Time:</label>
                <input type="time" id="startTime" name="startTime" required>
                <br>
                <label for="endTime">End Time:</label>
                <input type="time" id="endTime" name="endTime" required>
                <br>
                <button type="submit">Create Event</button>
            </form>
        </div>
    `;

    // Clear any existing code written
    createEventSection.innerHTML = '';

    // Insert the form into the create-event-section
    createEventSection.insertAdjacentHTML('beforeend', formHTML);

    // Event listener for the form submission
    $('#createEventForm').on('submit', function(event) {
        event.preventDefault();
        const eventTitle = $('#eventTitle').val();
        const startTime = $('#startTime').val();
        const endTime = $('#endTime').val();
        const newEvent = {
            title: eventTitle,
            start: dateStr + 'T' + startTime,
            end: dateStr + 'T' + endTime
        };
        // console.log('New Event:', newEvent);

        // Add the new event to the calendar
        addEventToCalendar(newEvent);

        // Clear and input the form with the previous information
        createEventSection.innerHTML = `
            <h3>Create an Event</h3>
            <p>Current Timezone: EST</p>
            <p> Click on the specific date, and submit the form to create an event.</p>
        `;
    });
}

function addEventToCalendar(event) {
    // Adds the new created event to the calendar
    calendar.addEvent(event);
}