
    document.getElementById('review-form').addEventListener('submit', function(event) {

      event.preventDefault();
    
      const name = document.getElementById('name').value;
      const rating = document.getElementById('rating').value;
      const reviewText = document.getElementById('review').value;

       // Alert user
alert("Review successfully submitted!");
    
      // Create a new review element
      const newReview = document.createElement('div');
      newReview.classList.add('review');
      
      newReview.innerHTML = `
        <h3>${name}</h3>
        <p>${'⭐'.repeat(rating)}</p>
        <p>${reviewText}</p>
      `;
    
      // Add the new review to the reviews section
      document.getElementById('reviews').appendChild(newReview);

     
    
      // Clear the form
      document.getElementById('review-form').reset();

    
    });
 