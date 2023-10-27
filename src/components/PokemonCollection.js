import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons, searchValue}) {
  const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchValue))
  const displayPokemons = filteredPokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
  return (
    <Card.Group itemsPerRow={6}>
      {displayPokemons}
    </Card.Group>
  );
}

export default PokemonCollection;
