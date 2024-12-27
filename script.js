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
    
    // Build the description (this is where you add your pet match logic)
    let petDescription = 'Based on your responses, we recommend a dog that is: \n\n';
    
    // Analyze each response and add corresponding recommendations:
    
    // Household (Kids)
    if (houseHold === 'nokids') {
        petDescription += '• Ideal for a calm and quiet home without kids. \n';
    } else if (houseHold === 'baby') {
        petDescription += '• Best suited for a home with babies or toddlers, requires patience. \n';
    } else if (houseHold === 'early') {
        petDescription += '• A dog that can handle younger children in early elementary grades. \n';
    } else if (houseHold === 'late') {
        petDescription += '• A dog that does well with kids in late elementary grades. \n';
    } else if (houseHold === 'middle') {
        petDescription += '• A dog that loves to interact with middle school-aged kids. \n';
    } else if (houseHold === 'older') {
        petDescription += '• A dog that does well in homes with high school-aged children or older. \n';
    }
    
    // Other animals in the home
    if (otherAnimals === 'none') {
        petDescription += '• A dog that would thrive as the only pet in the home. \n';
    } else if (otherAnimals === 'dog') {
        petDescription += '• A dog that gets along with other dogs and loves a social household. \n';
    } else if (otherAnimals === 'cat') {
        petDescription += '• A dog that is cat-friendly and can coexist peacefully with feline companions. \n';
    } else if (otherAnimals === 'other') {
        petDescription += '• A dog that is comfortable around other small animals (rabbits, guinea pigs, etc.). \n';
    }
    
    // Experience with dogs
    if (dogBefore === 'no') {
        petDescription += '• A beginner-friendly dog, easy to train and low maintenance. \n';
    } else if (dogBefore === 'small') {
        petDescription += '• A small dog with experience in handling, looking for a similar sized companion. \n';
    } else if (dogBefore === 'medium') {
        petDescription += '• A medium-sized dog with prior experience, looking for an active medium dog. \n';
    } else if (dogBefore === 'large') {
        petDescription += '• A large dog experienced adopter, looking for another big dog. \n';
    }
    
    // Dog size preference
    if (sizeDog === 'twenty') {
        petDescription += '• Small-sized dogs, great for apartments or cozy homes. \n';
    } else if (sizeDog === 'fourty') {
        petDescription += '• Medium-sized dogs, ideal for families with space and active lifestyles. \n';
    } else if (sizeDog === 'lots') {
        petDescription += '• Large-sized dogs, perfect for homes with large yards and lots of room to run. \n';
    }
    
    // Age of dog preference
    if (ageDog === 'puppy') {
        petDescription += '• A playful, energetic puppy that will need training and attention. \n';
    } else if (ageDog === 'young') {
        petDescription += '• A young adult dog (6 months to 2 years), still energetic but more mature. \n';
    } else if (ageDog === 'adult') {
        petDescription += '• An adult dog (2-7 years), settled and typically well-trained. \n';
    } else if (ageDog === 'senior') {
        petDescription += '• A senior dog (7+ years), calm and often requiring less exercise. \n';
    }
    
    // Activity level (lifestyle)
    if (lifeStyle === 'very') {
        petDescription += '• A high-energy dog that loves long walks, hikes, and plenty of exercise. \n';
    } else if (lifeStyle === 'somewhat') {
        petDescription += '• A moderately active dog that enjoys some exercise but also loves lounging. \n';
    } else if (lifeStyle === 'less') {
        petDescription += '• A dog with lower energy needs, content with one walk per day and quiet time at home. \n';
    }
    
    // Time alone during the day
    if (hoursAlone === 'two') {
        petDescription += '• A dog that loves being around people and can handle short periods alone. \n';
    } else if (hoursAlone === 'eight') {
        petDescription += '• A dog that can tolerate being alone for a few hours during the day but needs mental stimulation. \n';
    } else if (hoursAlone === 'moreeight') {
        petDescription += '• A more independent dog that can be left alone for extended hours without much issue. \n';
    }
    
    // Display result
    const resultSection = document.getElementById('result');
    const petDescriptionElement = document.getElementById('petDescription');
    
    petDescriptionElement.textContent = petDescription;  // Show the description
    resultSection.style.display = 'block';  // Show the result section
}

// Attach the event listener to the form
document.getElementById('quizForm').addEventListener('submit', getPetMatch);
