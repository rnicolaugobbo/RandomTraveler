// Function to generate a random number between 0 and num -1
const randomIdxGen = (num) => {
    return Math.floor(Math.random() * num)
};

// Object that holds the pool of places, seasons of the year and type of company
const travelPool = {
    places: ['Berlin', 'Sao Paulo', 'Barcelona', 'Recife'],
    seasons: ['Summer', 'Spring', 'Winter', 'Fall'],
    company: ['family', 'alone', 'friends']
};

// Variable to store messages
let randomMessage = [];

 // Funciton to build the final random message
const buildMessage = (randomMessage) => {
    // Loop to iterate over the object's properties
    for (let comp in travelPool) {
    let idx = randomIdxGen(travelPool[comp].length);

    // Use properties to build a message
    switch(comp) {
        case 'places':
            randomMessage.push(`You are traveling to ${travelPool[comp][idx]}.`);
            break;
        case 'seasons':
            randomMessage.push(`You are going in the ${travelPool[comp][idx]}.`);
            break;
        case 'company':
            if (idx === 0 || idx === 2) {
                randomMessage.push(`You are going with ${travelPool[comp][idx]}.`);
                break;
            };
            randomMessage.push(`You are going ${travelPool[comp][idx]}.`);
            break;
        default:
            randomMessage.push('You are not traveling.');
    }
}
    const message = randomMessage.join(' ');
    return message;
}

console.log(buildMessage(randomMessage));