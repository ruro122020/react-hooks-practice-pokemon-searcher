import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [searchValue, setSearchValue] = useState('')
  useEffect(()=>{
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json())
    .then(pokemons => setPokemons(pokemons))
  }, [])

  const handleNewPokemon=(newPokemon)=>{
    setPokemons(prevState => [...prevState, newPokemon])
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleNewPokemon}/>
      <br />
      <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
      <br />
      <PokemonCollection pokemons={pokemons} searchValue={searchValue}/>
    </Container>
  );
}

export default PokemonPage;
