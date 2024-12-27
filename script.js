// Function to generate the pet match based on the user's answers
function getPetMatch(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    // Get values from the form
    const houseHold = document.getElementById('houseHold').value;
    const otherAnimals = document.getElementById('otherAnimals').value;
    const dogBefore = document.getElementById('dogBefore').value;
    const sizeDog = document.getElementById('sizeDog').value;
    const ageDog = document.getElementById('ageDog').value;
    const lifeStyle = document.getElementById('lifeStyle').value;
    const hoursAlone = document.getElementById('hoursAlone').value;
    
    // Start building the pet description
    let petDescription = 'Based on your responses, we recommend a dog that is: \n\n';
    
    // Question 1: Household with kids
    if (houseHold === 'nokids') {
        petDescription += '• Ideal for a calm and quiet home without kids, preferring a peaceful environment. \n';
    } else if (houseHold === 'baby') {
        petDescription += '• Great with babies and toddlers, gentle and patient with young children. \n';
    } else if (houseHold === 'early' || houseHold === 'late' || houseHold === 'middle' || houseHold === 'older') {
        petDescription += '• Suitable for a home with children of various ages, playful and social with kids. \n';
    }

    // Question 2: Other animals in the home
    if (otherAnimals === 'none') {
        petDescription += '• Perfect for a home with no other pets, where it can receive all your attention. \n';
    } else if (otherAnimals === 'dog') {
        petDescription += '• Compatible with other dogs, but introductions should be done gradually. \n';
    } else if (otherAnimals === 'cat') {
        petDescription += '• Works well with cats, but may require some time to adjust. \n';
    } else if (otherAnimals === 'other') {
        petDescription += '• Can coexist with small animals like rabbits or guinea pigs. \n';

    // Question 3: Have you had a dog before?
    if (dogBefore === 'no') {
        petDescription += '• Great for first-time dog owners, easy to train and friendly. \n';
    } else if (dogBefore === 'small') {
        petDescription += '• Ideal for those with experience in caring for small dogs, handling their unique needs. \n';
    } else if (dogBefore === 'medium') {
        petDescription += '• Suitable for those experienced with medium-sized dogs, offering a balance of energy and manageability. \n';
    } else if (dogBefore === 'large') {
        petDescription += '• Best for experienced owners who can handle larger dogs with more energy and training needs. \n';

    // Question 4: Dog size preference
    if (sizeDog === 'twenty') {
        petDescription += '• Small-sized dogs (up to 20 pounds), perfect for apartments and easier to manage. \n';
    } else if (sizeDog === 'fourty') {
        petDescription += '• Medium-sized dogs (20-40 pounds), ideal for homes with yards or larger living spaces. \n';
    } else if (sizeDog === 'lots') {
        petDescription += '• Large-sized dogs (over 40 pounds), great for families with space for a more active dog. \n';

    // Question 5: Age of dog preference
    if (ageDog === 'puppy') {
        petDescription += '• A playful puppy, ideal for those with time to invest in training and socialization. \n';
    } else if (ageDog === 'young') {
        petDescription += '• A young adult dog, social and playful but already partially trained. \n';
    } else if (ageDog === 'adult') {
        petDescription += '• An adult dog, calm and well-adjusted, requiring less training but still active. \n';
    } else if (ageDog === 'senior') {
        petDescription += '• A senior dog, relaxed and laid-back, perfect for someone looking for a more low-key companion. \n';

    // Question 6: Lifestyle
    if (lifeStyle === 'very') {
        petDescription += '• A high-energy dog, perfect for outdoor activities like hiking or running, but avoid breeds with breathing or heart issues. \n';
    } else if (lifeStyle === 'somewhat') {
        petDescription += '• A moderately active dog, suitable for regular walks and some playtime, without requiring constant exercise. \n';
    } else if (lifeStyle === 'less') {
        petDescription += '• A more relaxed dog, content with shorter walks and lounging at home. \n';

    // Question 7: Hours alone per day
    if (hoursAlone === 'two') {
        petDescription += '• A dog that can handle being alone for up to 2 hours, ideal for work-from-home owners. \n';
    } else if (hoursAlone === 'eight') {
        petDescription += '• A dog that can handle being alone for 2-8 hours, but might need midday breaks or a dog walker. \n';
    } else if (hoursAlone === 'moreeight') {
        petDescription += '• A dog that is independent and comfortable being alone for over 8 hours, but may require less needy breeds. \n';

    }

    // Display the result section
    const resultSection = document.getElementById('result');
    const petDescriptionElement = document.getElementById('petDescription');
    
    petDescriptionElement.textContent = petDescription;  // Add the description text
    resultSection.style.display = 'block';  // Show the result section
}

// Attach the function to the form's submit event
document.getElementById('quizForm').addEventListener('submit', getPetMatch);
