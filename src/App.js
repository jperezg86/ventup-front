import React from "react";
import logo from "./logo.svg";
import axios from "axios";

import "./App.css";
import { URLS } from "./constants";
import PokemonRow from "./PokemonRow";

function App() {
  const [pokemonList, setPokemonList] = React.useState(undefined);

  React.useEffect(() => {
    const fetchPokemons = async () => {
      const { data } = await axios.get(
        `${URLS.POKEMON_API}/pokemon?limit=15&offset=200`
      );
      setPokemonList(data.results);
    };
    fetchPokemons();
  }, []);

  return !pokemonList ? (
    <h1>No data to display</h1>
  ) : (
    <table>
      <tr>
        <th>Nombre</th>
        <th>Peso</th>
        <th>Altura</th>
        <th>Cantidad de Habilidades</th>
        <th>Habilidades Activas</th>
      </tr>
      <tbody>
      {pokemonList.map((pokemon) => (
          <PokemonRow pokemon={pokemon} />
          ))}
      </tbody>
    </table>
  );
}

export default App;
