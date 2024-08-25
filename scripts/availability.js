// This code is for Proposal 1 in Unit 6: Implementation of the Availability Section

function showTimeBlockForm(dateStr) {
    // Select the section where the form needs to be inserted
    const timeSlotSection = document.querySelector('.time-slot-section');

    // Code to create the form
    const formHTML = `
        <div class="time-slot-form">
            <h3>Block Time Slot for ${dateStr}</h3>
            <form id="blockTimeSlotForm">
                <label for="startTime">Start Time:</label>
                <input type="time" id="startTime" name="startTime" required>
                <br>
                <label for="endTime">End Time:</label>
                <input type="time" id="endTime" name="endTime" required>
                <br>
                <button type="submit">Block Time</button>
            </form>
        </div>
    `;

    // Clear any existing code written
    timeSlotSection.innerHTML = '';

    // Insert the form into the time-slot-section section
    timeSlotSection.insertAdjacentHTML('beforeend', formHTML);

    // Event listener for the form submission
    $('#blockTimeSlotForm').on('submit', function(event) {
        event.preventDefault();
        const startTime = $('#startTime').val();
        const endTime = $('#endTime').val();
        const blockedTimeSlot = {
            title: 'Blocked/Unavailable',
            start: dateStr + 'T' + startTime,
            end: dateStr + 'T' + endTime
        };
        // console.log('Blocked Time Slot:', blockedTimeSlot);

        // Adding the blocked slot to the calendar
        addEventToCalendar(blockedTimeSlot);
        
        // Clear and input the form with the previous information
        timeSlotSection.innerHTML = `
            <h3>Select the timings you want to block</h3>
            <p>Current Timezone: EST</p>
            <p>To ensure you are in the correct timezone, please check <a href="https://www.timeanddate.com/time/map/">here</a>.</p>
            <p> Click on the specific date, and submit the form to block the time interval.</p>
        `;
    });
}

function addEventToCalendar(event) {
    // Adds the blocked event to the calendar
    calendar.addEvent(event);
}