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
        options: ["Puppy", "Young adult (6 months to 2 years)", "Adult (2 years to 7 years)", "Senior (more than 7 years)"]
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
    let result = "<ul>";

    // Example: Generating results based on answers (you can customize this logic)
    if (answers[0] === "No kids" && answers[1] === "None") {
        result += "<li>A calm, adult dog who enjoys quiet, peaceful environments.</li>";
    } else if (answers[0] === "High school and older" && answers[2] === "Yes, small dog(s)") {
        result += "<li>A smaller dog that enjoys being active with older teenagers.</li>";
    }

    result += "</ul>";
    resultDescription.innerHTML = result;
}
