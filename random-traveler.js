// Function to generate a random number between 0 and num -1
const randomIdxGen = (num) => {
    return Math.floor(Math.random() * num)
}

// Object that holds the pool of places, seasons of the year and type of company
const travelPool = {
    places: ['Berlin', 'Sao Paulo', 'Barcelona', 'Recife'],
    seasons: ['Summer', 'Spring', 'Winter', 'Fall'],
    company: ['family', 'alone', 'friends']
}