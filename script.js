// Store answers for the user
let answers = [];

// Questions and options
const questions = [
    {
        question: "Are there kids in the home?",
        options: ["No kids", "Baby, toddler, and older", "Early elementary and older", "Late elementary and older", "Middle school and older", "High school and older"]
    },
    {
        question: "Are there other animals in the home?",
        options: ["None", "Dog(s)", "Cat(s)", "Other small animals"]
    },
    {
        question: "Have you had a dog before?",
        options: ["No", "Yes, small dog(s)", "Yes, medium dog(s)", "Yes, large dog(s)"]
    },
    {
        question: "What size dog are you looking for?",
        options: ["Small (up to 20 pounds)", "Medium (20-40 pounds)", "Large (more than 40 pounds)"]
    },
    {
        question: "What age dog are you looking for?",
        options: ["Puppy (2 months to 6 months", "Young adult (6 months to 2 years)", "Adult (2 years to 7 years)", "Senior (more than 7 years)"]
    },
    {
        question: "What kind of lifestyle do you live?",
        options: ["Very active (regular hiking/running, several walks per day)", "Somewhat active (occasional hikes/runs, at least one walk per day)", "Less active (rarely or never hike/run, one walk per day)"]
    },
    {
        question: "How many hours a day will the animal be alone in the home?",
        options: ["Less than 2 hours", "2-8 hours", "More than 8 hours"]
    }
];

// Set up the first page
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("questionPage").style.display = "block";
    showQuestion(0);
});

// Show a question
function showQuestion(questionIndex) {
    const question = questions[questionIndex];
    document.getElementById("questionText").innerText = question.question;

    // Clear previous options
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("btn");
        button.addEventListener("click", function() {
            selectAnswer(option);
        });
        answersDiv.appendChild(button);
    });

    // Hide back button on the first question
    if (questionIndex === 0) {
        document.getElementById("backButton").style.display = "none";
    } else {
        document.getElementById("backButton").style.display = "inline-block";
    }

    // Show the "Next" button
    document.getElementById("nextButton").style.display = "inline-block";
}

// Handle answer selection
function selectAnswer(answer) {
    answers.push(answer);
    const buttons = document.querySelectorAll("#answers button");
    buttons.forEach(button => {
        button.classList.remove("selected");
    });
    event.target.classList.add("selected");
}

// Handle "Back" button click
document.getElementById("backButton").addEventListener("click", function() {
    const currentQuestionIndex = answers.length;
    answers.pop(); // Remove the last answer
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
});

// Handle "Next" button click
document.getElementById("nextButton").addEventListener("click", function() {
    const currentQuestionIndex = answers.length;
    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
});

// Show the results page
function showResults() {
    document.getElementById("questionPage").style.display = "none";
    document.getElementById("resultsPage").style.display = "block";
    const resultDescription = document.getElementById("resultDescription");

    // Generate the result description based on answers
    const lifestyle = answers[5]; // Question 6: Lifestyle
    const hoursAlone = answers[6]; // Question 7: Hours Alone
    const kids = answers[0]; // Question 1: Kids in the home
    const otherAnimals = answers[1]; // Question 2: Other animals in the home
    const dogExperience = answers[2]; // Question 3: Experience with dogs
    const dogSize = answers[3]; // Question 4: Desired dog size
    const dogAge = answers[4]; // Question 5: Desired dog age

    let result = "Based on your answers, we recommend the following:<br><ul>";

    // Match the lifestyle (activity level)
    if (lifestyle === "Very active (regular hiking/running, several walks per day)") {
        result += "<li>An energetic dog that loves outdoor activities like hiking or running.</li>";
    } else if (lifestyle === "Somewhat active (occasional hikes/runs, at least one walk per day)") {
        result += "<li>A moderately active dog that enjoys daily walks and occasional adventures.</li>";
    } else {
        result += "<li>A more laid-back dog that enjoys short walks and relaxed activities.</li>";
    }

    // Match the hours alone
    if (hoursAlone === "Less than 2 hours") {
        result += "<li>This dog should enjoy being around people and be adaptable to less alone time.</li>";
    } else if (hoursAlone === "2-8 hours") {
        result += "<li>This dog should be independent and comfortable with moderate alone time.</li>";
    } else {
        result += "<li>This dog should be more independent and capable of being alone for extended periods.</li>";
    }

    // Match the kids in the home
    if (kids === "No kids") {
        result += "<li>A calm, quiet dog that thrives in a kid-free environment.</li>";
    } else if (kids === "Baby, toddler, and older") {
        result += "<li>A patient dog, preferably small to medium in size, that gets along with young children.</li>";
    } else if (kids === "Early elementary and older") {
        result += "<li>A dog with a moderate energy level that is playful but gentle with younger children.</li>";
    } else if (kids === "Late elementary and older") {
        result += "<li>A dog that matches the energy of older kids, enjoying active playtime together.</li>";
    } else if (kids === "Middle school and older") {
        result += "<li>A dog that can engage in active play, with a bit of independence as the kids get older.</li>";
    } else {
        result += "<li>A more independent dog that is comfortable with older teens.</li>";
    }

    // Match other animals in the home
    if (otherAnimals === "None") {
        result += "<li>This dog should be the only pet in the home.</li>";
    } else if (otherAnimals === "Dog(s)") {
        result += "<li>This dog should get along well with other dogs. A dog-friendly breed is preferred.</li>";
    } else if (otherAnimals === "Cat(s)") {
        result += "<li>This dog should be fine with cats, and possibly tolerant of other pets as well.</li>";
    } else {
        result += "<li>This dog should get along well with small animals.</li>";
    }

    // Match previous dog experience
    if (dogExperience === "No") {
        result += "<li>A dog that is easy to train and friendly with beginners is ideal.</li>";
    } else if (dogExperience === "Yes, small dog(s)") {
        result += "<li>A medium to small-sized dog with a friendly demeanor would be perfect.</li>";
    } else if (dogExperience === "Yes, medium dog(s)") {
        result += "<li>A medium-sized dog that is friendly and manageable would suit your experience.</li>";
    } else {
        result += "<li>A large breed with a gentle temperament and manageable training needs.</li>";
    }

    // Match dog size preference
    if (dogSize === "Small (up to 20 pounds)") {
        result += "<li>A small-sized dog, suitable for apartments or smaller spaces.</li>";
    } else if (dogSize === "Medium (20-40 pounds)") {
        result += "<li>A medium-sized dog that is versatile and fits well in most homes.</li>";
    } else {
        result += "<li>A large breed dog that may need more space but is great for active owners.</li>";
    }

    // Match dog age preference
    if (dogAge === "Puppy") {
        result += "<li>A puppy that requires attention, training, and will grow with your family.</li>";
    } else if (dogAge === "Young adult (6 months to 2 years)") {
        result += "<li>A young adult dog, still playful but requiring less training than a puppy.</li>";
    } else if (dogAge === "Adult (2 years to 7 years)") {
        result += "<li>An adult dog that is well-behaved, with a good balance of energy and calmness.</li>";
    } else {
        result += "<li>A senior dog that enjoys a relaxed lifestyle and requires minimal training.</li>";
    }

    result += "</ul>";

    // Display the result
    resultDescription.innerHTML = result;
}

// Keep track of the current question
let currentQuestion = 1;
const totalQuestions = 7;

// Update progress bar and checkpoints
function updateProgress() {
  const progressBar = document.getElementById("progressBar");
  const checkpoints = document.querySelectorAll(".checkpoint");

  // Calculate the width of the progress bar as a percentage
  const progressPercentage = (currentQuestion / totalQuestions) * 100;
  progressBar.style.width = progressPercentage + "%";

  // Update checkpoints
  checkpoints.forEach((checkpoint, index) => {
    if (index + 1 < currentQuestion) {
      checkpoint.classList.add("completed");
      checkpoint.classList.remove("active");
    } else if (index + 1 === currentQuestion) {
      checkpoint.classList.add("active");
      checkpoint.classList.remove("completed");
    } else {
      checkpoint.classList.remove("active", "completed");
    }
  });
}

// Call updateProgress initially
updateProgress();

// Handle Next Button
document.getElementById("nextButton").addEventListener("click", function() {
  if (currentQuestion < totalQuestions) {
    currentQuestion++;
    updateProgress();
  }
});

// Handle Back Button
document.getElementById("backButton").addEventListener("click", function() {
  if (currentQuestion > 1) {
    currentQuestion--;
    updateProgress();
  }
});
