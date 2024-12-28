// Store answers for the user
let answers = [];

// Questions and answers
const questions = [
    {
        question: "Are there kids in the home?",
        options: ["No kids", "Baby, toddler, and older", "Early elementary and older", "Middle school and older", "High school and older"]
    },
    {
        question: "Are there other animals in the home?",
        options: ["None", "Dog(s)", "Cat(s)", "Other small animals"]
    },
    {
        question: "What size dog are you looking for?",
        options: ["Small (up to 20 pounds)", "Medium (20-40 pounds)", "Large (more than 40 pounds)"]
    },
    {
        question: "What age dog are you looking for?",
        options: ["Puppy", "Young adult (6 months to 2 years)", "Adult (2 years to 7 years)", "Senior (more than 7 years)"]
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
    const lifestyle = answers[0]; // Question 1: Kids in the home
    const otherAnimals = answers[1]; // Question 2: Other animals in the home
    const dogSize = answers[2]; // Question 3: Desired dog size
    const dogAge = answers[3]; // Question 4: Desired dog age

    let result = "Based on your answers, we recommend the following: ";

    // Match the lifestyle (activity level)
    if (lifestyle === "No kids") {
        result += "A calm, non-reactive dog that is comfortable with a quieter home. ";
    } else if (lifestyle === "Baby, toddler, and older") {
        result += "A patient and tolerant dog, likely medium to small in size, that gets along well with young children. ";
    } else if (lifestyle === "Early elementary and older") {
        result += "A moderate-energy dog that can handle the excitement of younger children. ";
    } else if (lifestyle === "Middle school and older") {
        result += "An energetic dog that can match the enthusiasm of school-age kids. ";
    } else {
        result += "A more independent and calm dog that is well-suited for older teens. ";
    }

    // Consider other animals in the home
    if (otherAnimals === "None") {
        result += "This dog should be the only pet in the home. ";
    } else if (otherAnimals === "Dog(s)") {
        result += "This dog should be good with other dogs, potentially requiring a dog introduction. ";
    } else if (otherAnimals === "Cat(s)") {
        result += "This dog should be comfortable around cats and not show aggression. ";
    } else {
        result += "This dog should get along well with other small animals in the home. ";
    }

    // Size of dog preference
    if (dogSize === "Small (up to 20 pounds)") {
        result += "You may prefer a smaller breed, which is often easier to manage in apartments or smaller spaces. ";
    } else if (dogSize === "Medium (20-40 pounds)") {
        result += "A medium-sized dog will be a good fit for various living situations, offering a nice balance of energy and size. ";
    } else {
        result += "A larger breed may suit your home if you have space and prefer a more active dog. ";
    }

    // Age preference
    if (dogAge === "Puppy") {
        result += "A puppy will require more training and attention, but will grow to be your long-term companion. ";
    } else if (dogAge === "Young adult (6 months to 2 years)") {
        result += "A young adult dog will be playful but more manageable, with some prior training already in place. ";
    } else if (dogAge === "Adult (2 years to 7 years)") {
        result += "An adult dog is likely to be calmer and well-trained, making it easier to integrate into your home. ";
    } else {
        result += "A senior dog will require less exercise and is often more laid-back, making it a great companion for a quieter home. ";
    }

    resultDescription.innerText = result;
}
