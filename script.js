// Function to generate the pet match based on the user's answers
function getPetMatch(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    
    // Get the form inputs
    const houseHold = document.getElementById('houseHold').value;
    const otherAnimals = document.getElementById('otherAnimals').value;
    const dogBefore = document.getElementById('dogBefore').value;
    const sizeDog = document.getElementById('sizeDog').value;
    const ageDog = document.getElementById('ageDog').value;
    const lifeStyle = document.getElementById('lifeStyle').value;
    const hoursAlone = document.getElementById('hoursAlone').value;
    
    // Initialize the pet description
    let petDescription = 'Based on your responses, we recommend a dog that is: \n\n';

    // Activity Level + Lifestyle
    if (lifeStyle === 'very') {
        petDescription += '• Very energetic, loves outdoor activities like running, hiking, and long walks. Needs a lot of exercise. \n';
    } else if (lifeStyle === 'somewhat') {
        petDescription += '• Moderate energy, enjoys daily walks and playtime, but also likes to relax indoors. \n';
    } else {
        petDescription += '• Low energy, prefers lounging, and enjoys short walks or indoor play. \n';
    }

    // Size Preferences
    if (sizeDog === 'twenty') {
        petDescription += '• Small in size, suitable for apartments or homes with limited space. Independent and easier to manage. \n';
    } else if (sizeDog === 'fourty') {
        petDescription += '• Medium-sized, adaptable to various living environments. Needs some space but can comfortably live in most homes. \n';
    } else {
        petDescription += '• Large in size, needs ample space and regular exercise. Ideal for larger homes or homes with yards. \n';
    }

    // Previous Dog Ownership
    if (dogBefore === 'no') {
        petDescription += '• A first-time dog owner will likely benefit from a dog that is easy to train and handle. A calm, patient dog would be ideal. \n';
    } else if (dogBefore === 'small') {
        petDescription += '• Comfortable with smaller dogs, you may be suited for a breed that’s easy to manage but still requires attention. \n';
    } else if (dogBefore === 'medium') {
        petDescription += '• Experience with medium-sized dogs means you may enjoy a more active dog, but still manageable. \n';
    } else {
        petDescription += '• Experienced with larger dogs, you may be ready for a dog that needs more space and exercise, as well as some training. \n';
    }

    // Household and Other Pets
    if (houseHold === 'nokids') {
        petDescription += '• Prefers a quieter home. A dog that enjoys calm environments, independent but affectionate, and not too demanding. \n';
    } else if (houseHold === 'baby') {
        petDescription += '• Needs a gentle, patient dog that’s tolerant of babies and can handle occasional noise and movement. \n';
    } else if (houseHold === 'early') {
        petDescription += '• A dog that’s good with children, active and social, enjoys playtime with younger kids. \n';
    } else {
        petDescription += '• A family-oriented dog, enjoys being around older children, and is energetic and playful. \n';
    }

    if (otherAnimals === 'none') {
        petDescription += '• Prefers being the only pet, may enjoy solitude and attention without the competition. \n';
    } else if (otherAnimals === 'dog') {
        petDescription += '• Social, can coexist well with other dogs. Enjoys companionship from a fellow dog. \n';
    } else if (otherAnimals === 'cat') {
        petDescription += '• Tolerant of other animals, especially cats. Calm and adaptable in multi-pet households. \n';
    } else {
        petDescription += '• Good with smaller pets. A calm temperament and can adjust to being around other small animals. \n';
    }

    // Time Alone
    if (hoursAlone === 'two') {
        petDescription += '• Needs constant companionship, doesn’t do well alone for long periods. Would prefer someone who is home most of the time. \n';
    } else if (hoursAlone === 'eight') {
        petDescription += '• Can tolerate being alone for a few hours but still enjoys regular interaction. \n';
    } else {
        petDescription += '• Independent, can be left alone for extended periods without feeling anxious. \n';
    }

    // Age Preferences
    if (ageDog === 'puppy') {
        petDescription += '• A puppy requires more attention and training, but they’re playful, energetic, and easy to bond with. \n';
    } else if (ageDog === 'young') {
        petDescription += '• A young adult dog, still energetic and playful but already trained and with more manageable behavior. \n';
    } else if (ageDog === 'adult') {
        petDescription += '• An adult dog, calm and generally well-behaved. Enjoys a balanced lifestyle with play and rest. \n';
    } else {
        petDescription += '• A senior dog, may be less active but can still be affectionate and loving. Great for a quieter home and low-key lifestyle. \n';
    }

    // Display result
    const resultSection = document.getElementById('result');
    const petDescriptionElement = document.getElementById('petDescription');
    
    petDescriptionElement.textContent = petDescription;  // Show the description
    resultSection.style.display = 'block';  // Show the result section
}

// Attach the event listener to the form
document.getElementById('quizForm').addEventListener('submit', getPetMatch);
