// Store answers and page index
let currentQuestionIndex = 0;
const answers = [];
const questions = [
    {
        question: "Are there any kids in the home?",
        options: ["No kids", "Baby, toddler, and older", "Early elementary and older", "Late elementary and older", "Middle school and older", "High school and older"]
    },
    {
        question: "Are there any other animals in the home?",
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
        options: ["Puppy", "Young adult (6 months to 2 years)", "Adult (2 years to 7 years)", "Senior (more than 7 years)"]
    },
    {
        question: "What kind of lifestyle do you live?",
        options: ["Very active (regular hiking/running, several walks per day)", "Somewhat active (occasional hikes/runs, at least one walk per day)", "Less active (rarely or never hike/run, one walk per day)"]
    },
    {
        question: "How many hours a day will the animal be alone in the home while the family is at work/school?",
        options: ["Less than 2 hours (I work/go to school from home)", "2-8 hours (I work/go to school in-person and virtual in hybrid format)", "More than 8 hours (I work/go to school out of the home)"]
    }
];

// Handle the "Start" button click to show the first question page
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("landingPage").classList.add("hidden"); // Hide landing page
    showQuestionPage(); // Show first question page
});

// Show the current question page
function showQuestionPage() {
    const question = questions[currentQuestionIndex];
    document.getElementById("questionTitle").textContent = question.question;
    
    const answersContainer = document.getElementById("answersContainer");
    answersContainer.innerHTML = ''; // Clear previous answers

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });

    document.getElementById("questionPage").classList.remove("hidden"); // Show question page
    document.getElementById("nextButton").classList.remove("hidden"); // Show next button
    document.getElementById("backButton").classList.remove("hidden"); // Show back button
    document.getElementById("nextButton").disabled = true; // Disable next until an option is selected
}

// Handle answer selection
function selectAnswer(index) {
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => button.classList.remove("selected"));
    
    const selectedButton = answerButtons[index];
    selectedButton.classList.add("selected");
    answers[currentQuestionIndex] = index; // Store selected answer

    document.getElementById("nextButton").disabled = false; // Enable next button after selection
}

// Handle "Next" button click to move to the next question
document.getElementById("nextButton").addEventListener("click", function() {
    currentQuestionIndex++; // Move to the next question
    
    if (currentQuestionIndex < questions.length) {
        showQuestionPage(); // Show the next question page
    } else {
        showResultsPage(); // Show results when all questions are answered
    }
});

// Handle "Back" button click
document.getElementById("backButton").addEventListener("click", function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--; // Move to the previous question
        showQuestionPage(); // Show the previous question page
    }
});

// Show results page with the description based on answers
function show
