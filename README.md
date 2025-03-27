# Pokédex Web App

## Overview
The **Pokédex Web App** is an interactive web application that allows users to search for Pokémon, view details about them, and browse through a carousel of Pokémon images. The app fetches real-time Pokémon data from the [PokéAPI](https://pokeapi.co/) and displays the results in a visually appealing format.

## Features
- **Pokémon Search**: Users can enter a Pokémon name or ID and get detailed information.
- **Search Results Page**: Displays the selected Pokémon in a styled card with an image and key details.
- **Smooth Image Carousel**: A dynamically transitioning carousel showcasing Pokémon images with smooth animations.
- **Responsive Design**: The app is optimized for both desktop and mobile views.
- **Sticky Footer & Navbar**: Ensures proper layout and usability.
- **Optimized Layout**: Designed to fit all content within a single screen on desktop for seamless navigation.

## Technologies Used
- **HTML5**: Structuring the web pages
- **CSS3**: Styling, animations, and layout responsiveness
- **JavaScript (Vanilla JS)**: Fetching data from the PokéAPI, DOM manipulation, and event handling
- **Bootstrap**: Enhancing layout and responsiveness
- **PokéAPI**: Providing real-time Pokémon data

## Installation & Setup
1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/pokedex-web-app.git
   ```
2. **Navigate into the project directory**:
   ```sh
   cd pokedex-web-app
   ```
3. **Open `index.html` in your browser**:
   - Double-click `index.html`
   - OR use a local server such as `Live Server` in VS Code

## How the JavaScript Works
The JavaScript (`script.js`) is responsible for handling user interactions, fetching data from the PokéAPI, and updating the DOM dynamically.

### 1. Searching for a Pokémon
- When the user enters a Pokémon name or ID in the search bar and clicks "Search," the `searchPokemon()` function is triggered.
- It retrieves the input value and redirects the user to `search.html` with the search term as a query parameter.

### 2. Fetching and Displaying Pokémon Data
- On `search.html`, JavaScript reads the query parameter from the URL.
- The `fetchPokemonData(query)` function calls the PokéAPI (`https://pokeapi.co/api/v2/pokemon/{query}`) to fetch data.
- If the request is successful, the `displayPokemon(pokemon)` function dynamically creates an HTML card containing:
  - The Pokémon’s name, image, ID, and types.
  - A button linking to `details.html` (if implemented).
- If no results are found, an error message is displayed.

### 3. Image Carousel
- The homepage (`index.html`) features an image carousel.
- The carousel transitions smoothly using CSS animations.
- JavaScript ensures images rotate at a controlled interval.

### 4. Ensuring Smooth Navigation
- JavaScript ensures that the search only runs when required (i.e., no errors occur when navigating back to the homepage).
- It also makes sure that elements are only manipulated if they exist on the current page.

## File Structure
```
/
├── index.html        # Main homepage
├── search.html       # Search results page
├── details.html      # Pokémon details page
├── style.css         # Main stylesheet
├── script.js         # JavaScript logic for search & display
├── images/           # Image assets
├── README.md         # Project documentation
└── ...
```

## Usage
### Searching for Pokémon
1. Enter a Pokémon name or ID in the search bar on the homepage.
2. Click the search button to be redirected to the search results page.
3. The app fetches and displays the Pokémon’s details (name, ID, type, and image) in a visually appealing card.

### Browsing the Image Carousel
- The homepage features a Pokémon image carousel.
- The carousel smoothly transitions between images using CSS animations.
- A semi-transparent white background enhances readability and visibility.

## License
This project is licensed under the MIT License.

---
Created by **Silas Aurelius Leone** 🚀

