import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetail from "../../components/PokemonDetail/PokemonDetail.jsx";
import fetchPokemon from "../../api/fetchPokemonInfo.js";
import fetchArtworks from "../../api/fetchPokemonArtwork.js";


function Pokemon() {
  const [pokemon,setPokemon] = useState({})
  const [pokemonArtwork, setPokemonArtwork] = useState([])
  const params = useParams()

  //fetching information about pokemons
  useEffect(() => {
    const pokemon = async () => {
      const pokeInfo = await fetchPokemon(params)
      console.log(pokeInfo)
      setPokemon(pokeInfo)
    }
    pokemon()
  }, [params])

  //fetching artworks from another api
  useEffect(() => {
    const artworks = async () => {
      const artworks = await fetchArtworks()
      setPokemonArtwork(artworks)
    }
    artworks()
  }, [])

  if(!pokemon.key) {return <h1>LOADING...</h1>}
  
  return (
      <PokemonDetail data={pokemon} artwork={pokemonArtwork}/>
  )
}

export default Pokemon;