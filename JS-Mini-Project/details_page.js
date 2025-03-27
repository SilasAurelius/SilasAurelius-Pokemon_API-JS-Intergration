const urlParams = new URLSearchParams(window.location.search);
      const pokemonId = urlParams.get('id');

      if (pokemonId) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Pokémon not found');
            }
            return response.json();
          })
          .then(data => {
            // Populate Pokémon details
            document.getElementById('pokemon-img').src = data.sprites.front_default;
            document.getElementById('pokemon-name').innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            document.getElementById('pokemon-id').innerText = `ID: #${data.id}`;

            // Types
            const types = data.types.map(type => type.type.name).join(', ');
            document.getElementById('pokemon-types').innerText = types.charAt(0).toUpperCase() + types.slice(1);

            // Abilities
            const abilities = data.abilities.map(ability => ability.ability.name).join(', ');
            document.getElementById('pokemon-abilities').innerText = abilities.charAt(0).toUpperCase() + abilities.slice(1);

            // Stats
            const statsList = document.getElementById('pokemon-stats');
            statsList.innerHTML = '';
            data.stats.forEach(stat => {
              const statItem = document.createElement('li');
              statItem.innerText = `${stat.stat.name}: ${stat.base_stat}`;
              statsList.appendChild(statItem);
            });
          })
          .catch(err => {
            console.log('Error fetching Pokémon data:', err);
            document.getElementById('pokemon-details').innerHTML = '<p>Sorry, no data found for this Pokémon.</p>';
          });
      } else {
        document.getElementById('pokemon-details').innerHTML = '<p>No Pokémon ID provided in the URL.</p>';
      }