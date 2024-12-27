// script.js
document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
  
    // Get the values from the form
    const petType = document.getElementById('petType').value;
    const timeAvailability = document.getElementById('timeAvailability').value;
    const children = document.getElementById('children').value;
    const activityLevel = document.getElementById('activityLevel').value;
  
    // Generate a pet description based on the answers
    let description = '';
  
    if (petType === 'dog' && timeAvailability === 'lots' && activityLevel === 'active') {
      description = 'We recommend an active breed like a Labrador Retriever!';
    } else if (petType === 'cat' && timeAvailability === 'minimal' && activityLevel === 'low') {
      description = 'We recommend a low-maintenance cat like a British Shorthair.';
    } else {
      description = 'Based on your answers, a variety of pets might be suitable! Consider visiting your local shelter for more options.';
    }
  
    // Show the result
    document.getElementById('petDescription').innerText = description;
    document.getElementById('result').style.display = 'block';
  });
  
