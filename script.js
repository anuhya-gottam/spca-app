// Data for the questions and answers
const questions = [
  {
    question: "Are there any kids in the home?",
    options: ["No kids", "Baby, toddler, and older", "Early elementary and older", "Late elementary and older", "Middle school and older", "High school and older"],
    key: "houseHold"
  },
  {
    question: "Are there any other animals in the home?",
    options: ["None", "Dog(s)", "Cat(s)", "Other small animals"],
    key: "otherAnimals"
  },
  {
    question: "Have you had a dog before?",
    options: ["No", "Yes, small dog(s)", "Yes, medium dog(s)", "Yes, large dog(s)"],
    key: "dogBefore"
  },
  {
    question: "What size dog are you looking for?",
    options: ["Small (up to 20 pounds)", "Medium (20-40 pounds)", "Large (more than 40 pounds)"],
    key: "sizeDog"
  },
  {
    question: "What age dog are you looking for?",
    options: ["Puppy", "Young adult (6 months to 2 years)", "Adult (2 years to 7 years)", "Senior (more than 7 years)"],
    key: "ageDog"
  },
  {
    question: "What kind of lifestyle do you live?",
    options: ["Very active", "Somewhat active", "Less active"],
    key: "lifeStyle"
  },
  {
    question: "How many hours a day will the animal be alone?",
    options: ["Less than 2 hours", "2-8 hours", "More than 8 hours"],
    key: "hoursAlone"
  }
];

let currentQuestion = 0;
let answers = [];

// Show the landing page when the app starts
document.getElementById('startButton').addEventListener('click', startQuiz);

// Show the next question when "Next" is clicked
document.getElementById('nextButton').addEventListener('click', nextQuestion);

// Show the previous question when "Back" is clicked
document.getElementById('backButton').addEventListener('click', previousQuestion);

// Restart the quiz when "Restart" is clicked
document.getElementById('restartButton').addEventListener('click', restartQuiz);

function startQuiz() {
  document.getElementById('landingPage').classList.add('hidden');
  document.getElementById('questionPage').classList.remove('hidden');
  showQuestion();
}

function showQuestion() {
  const questionData = questions[currentQuestion];
  document.getElementById('questionText').textContent = questionData.question;

  const answerButtons = document.getElementById('answerButtons');
  answerButtons.innerHTML = ''; // Clear previous buttons

  questionData.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => selectAnswer(index));
    answerButtons.appendChild(button);
  });

  // Show/Hide navigation buttons
  document.getElementById('backButton').classList.toggle('hidden', currentQuestion === 0);
  document.getElementById('nextButton').disabled = true;
}

function selectAnswer(index) {
  const questionData = questions[currentQuestion];
  answers[currentQuestion] = index;

  // Highlight the selected option
  const buttons = document.getElementById('answerButtons').children;
  Array.from(buttons).forEach((button, i) => {
    if (i === index) {
      button.classList.add('selected');
    } else {
      button.classList.remove('selected');
    }
  });

  // Enable "Next" button
  document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResults();
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function showResults() {
  document.getElementById('questionPage').classList.add('hidden');
  document.getElementById('resultsPage').classList.remove('hidden');

  const petDescription = generatePetDescription();
  document.getElementById('petDescription').innerHTML = petDescription;
}

function generatePetDescription() {
  let description = "<ul>";

  // Example logic based on answers
  if (answers[5] === 0) { // Very Active lifestyle
    description += "<li>Needs a highly energetic dog, no dogs with heart or breathing issues.</li>";
  } else if (answers[5] === 1) { // Somewhat Active lifestyle
    description += "<li>A moderate-energy dog would be ideal, with some tolerance for quiet moments.</li>";
  } else { // Less Active lifestyle
    description += "<li>Prefer a more relaxed dog that enjoys lounging but still needs moderate walks.</li>";
  }

  // Further analysis based on combination of answers
  if (answers[3] === 2) { // Large size dog
    description += "<li>A large breed dog would be appropriate for your living space and activity level.</li>";
  }

  if (answers[1] === 0) { // No other pets
    description += "<li>Prefers a home without other pets for a less stressful environment.</li>";
  } else {
    description += "<li>Will adapt well to a home with other dogs or pets, especially if properly introduced.</li>";
  }

  description += "</ul>";
  return description;
}

function restartQuiz() {
  currentQuestion = 0;
  answers = [];
  document.getElementById('resultsPage').classList.add('hidden');
  document.getElementById('
