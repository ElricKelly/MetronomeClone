// Get references to the HTML elements

window.addEventListener("DOMContentLoaded", (e) =>{

    function formatMoveName(moveName) {
        // Remove the hypen and replace with space
        moveName = moveName.replace(/-/g, ' ');
      
        // Capitalize the first letter of each word
        moveName = moveName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      
        return moveName;
      }

      function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      function assignMoveColor(moveType) {
        let color;
      
        switch (moveType) {
          case 'normal':
            color = '#A8A878';
            break;
          case 'fire':
            color = '#F08030';
            break;
          case 'water':
            color = '#6890F0';
            break;
          case 'electric':
            color = '#F8D030';
            break;
          case 'grass':
            color = '#78C850';
            break;
          case 'ice':
            color = '#98D8D8';
            break;
          case 'fighting':
            color = '#C03028';
            break;
          case 'poison':
            color = '#A040A0';
            break;
          case 'ground':
            color = '#E0C068';
            break;
          case 'flying':
            color = '#A890F0';
            break;
          case 'psychic':
            color = '#F85888';
            break;
          case 'bug':
            color = '#A8B820';
            break;
          case 'rock':
            color = '#B8A038';
            break;
          case 'ghost':
            color = '#705898';
            break;
          case 'dragon':
            color = '#7038F8';
            break;
          case 'dark':
            color = '#705848';
            break;
          case 'steel':
            color = '#B8B8D0';
            break;
          case 'fairy':
            color = '#EE99AC';
            break;
          default:
            color = '#C4C4C4';
            break;
        }
      
        return color;
      }
      
   

const startButton = document.getElementById('start-button');
const moveDisplay = document.getElementById('move-display');

// Set up the PokeAPI URL
const pokeApiUrl = 'https://pokeapi.co/api/v2/move/';

// Function to get a random move from the PokeAPI
async function getRandomMove() {
  // Generate a random move ID between 1 and 826
  const moveId = randomIntFromInterval(1, 902)
  
  // Make a request to the PokeAPI with the move ID
  const response = await axios.get(`${pokeApiUrl}${moveId}`);

  // Extract the move name from the response data
  const moveName = response.data.name;
  const moveType = response.data.type.name;

  // Return the move name
  return [moveName, moveType];
}

// Function to display the random move
async function displayRandomMove() {
  // Get a random move from the PokeAPI
  const move = await getRandomMove();
  const formattedMoveName = formatMoveName(move[0]);
  const moveColor = assignMoveColor(move[1]);

  // Display the move in the move display element
  moveDisplay.textContent = `${formattedMoveName}!`;
  moveDisplay.style.color = moveColor;
}

// Add an event listener to the start button
startButton.addEventListener('click', displayRandomMove);



})

