// Variables for the pages and buttons
const startButton = document.getElementById('startButton');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');
const landingPage = document.getElementById('landingPage');
const questionPage = document.getElementById('questionPage');
const resultsPage = document.getElementById('resultsPage');
const questionText = document.getElementById('questionText');
const answerButtons = document.getElementById('answerButtons');
const petDescription = document.getElementById('petDescription');

// Variables to store user answers
let answers = {
  houseHold: '',
  otherAnimals: '',
  dogBefore: '',
  sizeDog: '',
  ageDog: '',
  lifeStyle: '',
  hoursAlone: ''
};

// Array to hold the questions and answers
const questions = [
  { question: 'Are there any kids in the home?', name: 'houseHold', options: ['No kids', 'Baby, toddler, and older', 'Early elementary and older', 'Late elementary and older', 'Middle school and older', 'High school and older'] },
  { question: 'Are there any other animals in the home?', name: 'otherAnimals', options: ['None', 'Dog(s)', 'Cat(s)', 'Other small animals'] },
  { question: 'Have you had a dog before?', name: 'dogBefore', options: ['No', 'Yes, small dog(s)', 'Yes, medium dog(s)', 'Yes, large dog(s)'] },
  { question: 'What size dog are you looking for?', name: 'sizeDog', options: ['Small (up to 20 pounds)', 'Medium (20-40 pounds)', 'Large (more than 40 pounds)'] },
  { question: 'What age dog are you looking for?', name: 'ageDog', options: ['Puppy', 'Young adult (6 months to 2 years)', 'Adult (2 years to 7 years)', 'Senior (more than 7 years)'] },
  { question: 'What kind of lifestyle do you live?', name: 'lifeStyle', options: ['Very active (regular hiking/running)', 'Somewhat active (occasional hikes/runs)', 'Less active (rarely hike/run)'] },
  { question: 'How many hours a day will the animal be alone?', name: 'hoursAlone', options: ['Less than 2 hours', '2-8 hours', 'More than 8 hours'] }
];

let currentQuestionIndex = 0; // Track the current question index

startButton.addEventListener('click', function() {
  showQuestionPage(); // Show the question page
});

// Function to show the question page
function showQuestionPage() {
  landingPage.style.display = 'none'; // Hide the landing page
  questionPage.style.display = 'block'; // Show the question page
  showQuestion(); // Display the first question
  backButton.style.display = 'none'; // Hide back button on the first question
  nextButton.style.display = 'inline-block'; // Show next button
  nextButton.disabled = true; // Disable next button initially
}

// Function to show the question text and answer options
function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionText.textContent = question.question;
  
  answerButtons.innerHTML = ''; // Clear any previous buttons
  question.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = function() {
      selectAnswer(button, option);
    };
    answerButtons.appendChild(button);
  });
}

// Handle answer selection
function selectAnswer(button, answer) {
  answers[questions[currentQuestionIndex].name] = answer; // Store the answer
  button.classList.add('selected'); // Change the button color to orange
  nextButton.disabled = false; // Enable the Next button
}

// Event listener for the "Next" button
nextButton.addEventListener('click', function() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++; // Go to the next question
    showQuestion();
  } else {
    showResultsPage(); // Show results page after all questions are answered
  }
});

// Function to show the results page
function showResultsPage() {
  questionPage.style.display = 'none'; // Hide the question page
  resultsPage.style.display = 'block'; // Show the results page
  backButton.style.display = 'none'; // Hide back button on results page
  nextButton.style.display = 'none'; // Hide next button on results page
  
  // Display a customized result based on answers
  generateResults();
}

// Function to generate the results based on user answers
function generateResults() {
  let description = "Based on your answers, we recommend a ";

  // Combine answers to generate a recommendation description
  if (answers.lifeStyle === 'Very active (regular hiking/running)') {
    description += "high-energy dog";
  } else if (answers.lifeStyle === 'Somewhat active (occasional hikes/runs)') {
    description += "moderately active dog";
  } else {
    description += "less active dog";
  }

  description += " who is ";

  // Check size preference
  if (answers.sizeDog === 'Small (up to 20 pounds)') {
    description += "small ";
  } else if (answers.sizeDog === 'Medium (20-40 pounds)') {
    description += "medium-sized ";
  } else {
    description += "large ";
  }

  description += "and ";

  // Check age preference
  if (answers.ageDog === 'Puppy') {
    description += "a young dog (puppy)";
  } else if (answers.ageDog === 'Young adult (6 months to 2 years)') {
    description += "a young adult dog";
  } else if (answers.ageDog === 'Adult (2 years to 7 years)') {
    description += "an adult dog";
  } else {
    description += "a senior dog";
  }

  // Add additional preferences based on answers
  if (answers.houseHold === 'Early elementary and older') {
    description += " who is comfortable around children in early elementary school and older.";
  } else {
    description += " who can adapt to other family situations.";
  }

  // Display final result description
  petDescription.textContent = description;
}
