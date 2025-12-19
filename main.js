document.addEventListener('DOMContentLoaded', function () {
  // Book Now Button functionality
  const bookNowBtn = document.getElementById('book-now-btn');
  if (bookNowBtn) {
    bookNowBtn.addEventListener('click', function () {
      document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Booking Form Submission
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form from submitting to the server

      // Get the form data
      const checkInDate = document.getElementById('check-in').value;
      const checkOutDate = document.getElementById('check-out').value;
      const guestCount = document.getElementById('guest').value;

      // Validation: Check if all fields are filled
      if (!checkInDate || !checkOutDate || !guestCount) {
        alert("Please fill in all the fields.");
        return; // Exit the function if fields are incomplete
      }

      // Optionally validate check-in and check-out dates (e.g., check-in should be before check-out)
      if (new Date(checkInDate) >= new Date(checkOutDate)) {
        alert("Check-out date must be later than check-in date.");
        return;
      }

      // Store the data in localStorage or send it to a server (for now, we're using localStorage)
      const bookingData = {
        checkIn: checkInDate,
        checkOut: checkOutDate,
        guests: guestCount,
      };
      localStorage.setItem('bookingData', JSON.stringify(bookingData));

      // Alert user
      alert("Booking successfully submitted!");

      // Reset form
      bookingForm.reset();
    });
  }
  document.getElementById('read-more-btn').addEventListener('click', function() {
    // Toggle the visibility of extra content
    const extraContent = document.getElementById('extra-content');
    const readMoreBtn = document.getElementById('read-more-btn');
    const historyLink = document.getElementById('history-link');
    
    // Check if the content is currently hidden or visible
    if (extraContent.style.display === 'none') {
      extraContent.style.display = 'inline';
      readMoreBtn.innerText = 'Read Less';
      historyLink.style.display = 'inline';  // Show the link to the history page
    } else {
      extraContent.style.display = 'none';
      readMoreBtn.innerText = 'Read More';
      historyLink.style.display = 'none';  // Hide the link again if "Read Less" is clicked
    }
  });
  
});
