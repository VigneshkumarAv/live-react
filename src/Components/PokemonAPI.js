import React, { useState, useEffect } from "react";

/* Create a React web application that consumes the https://pokeapi.co/api/v2/pokemon/ API and displays a table containing a list of pokemon names and their abilities. The application should make multiple parallel API calls to fetch the pokemon details, including their abilities, and display them in the table. */
const PokemonAPI = () => {
  const [pokemonData, setPokemonData] = useState([]);

  const handleApiData = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const jsonData = await response.json();
      const pokemonData = jsonData.results;
      const mappedData = pokemonData.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const jsonData = await res.json();
        const abilities = jsonData.abilities
          .map((item) => item?.ability)
          .map((inner) => inner.name)
          .join(",");
        return {
          name: pokemon.name,
          abilities: abilities,
        };
      });
      const finalResult = await Promise.all(mappedData);
      setPokemonData(finalResult);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleApiData();
  }, []);

  return (
    <div>
      <h1>Pokémon and Abilities</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>abilities</th>
        </tr>
        {pokemonData?.map((pokemon) => (
          <tr key={pokemon.name}>
            <td>{pokemon.name}</td>
            <td>{pokemon.abilities}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default PokemonAPI;
