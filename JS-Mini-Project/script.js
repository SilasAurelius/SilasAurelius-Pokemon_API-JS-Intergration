document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded successfully");
  
  const urlParams = new URLSearchParams(window.location.search);
  if (window.location.pathname.includes("search.html")) {
    const pokemonQuery = urlParams.get("name");
    if (pokemonQuery) {
      fetchPokemonData(pokemonQuery);
    } else {
      alert("No Pokémon name provided in the search query.");
      window.location.href = "index.html";
    }
  }
});

function searchPokemon() {
  const searchInput = document.getElementById("pokemonSearch");
  if (!searchInput || !searchInput.value.trim()) {
    alert("Please enter a Pokémon name or ID.");
    return;
  }
  
  window.location.href = `search.html?name=${searchInput.value.trim().toLowerCase()}`;
}

function fetchPokemonData(query) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Pokémon not found");
      }
      return response.json();
    })
    .then(data => {
      console.log("Pokémon Data:", data);
      displayPokemon(data);
    })
    .catch(error => {
      console.error("Error fetching Pokémon:", error);
      const resultContainer = document.getElementById("pokemonResult");
      if (resultContainer) {
        resultContainer.innerHTML = "<p>Pokémon not found. Please check the name or ID.</p>";
      }
    });
}

function displayPokemon(pokemon) {
  const resultContainer = document.getElementById("pokemonResult");
  if (!resultContainer) {
    console.error("Error: 'pokemonResult' element not found.");
    return;
  }
  
  resultContainer.innerHTML = `
    <div class="pokemon-card shadow-lg p-3 mb-5 bg-white rounded">
      <div class="pokemon-img-container">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon-img rounded-circle">
      </div>
      <h2 class="pokemon-name">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <p><strong>ID:</strong> #${pokemon.id}</p>
      <p><strong>Type:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
      <a href="details.html?id=${pokemon.id}" class="btn btn-primary">View Details</a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll(".carousel-item");

  function showNextSlide() {
    slides[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add("active");
  }

  // Set the first slide as active initially
  slides[currentIndex].classList.add("active");

  setInterval(showNextSlide, 5000); // Change slide every 5 seconds (slower)
});

