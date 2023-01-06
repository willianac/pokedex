import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetail from "../../components/PokemonDetail/PokemonDetail.jsx";



// const resource = fetchData('https://graphqlpokemon.favware.tech/v7', gqlQuery )

function Pokemon() {
  const [pokemon,setPokemon] = useState({})
  const [pokemonArtwork, setPokemonArtwork] = useState([])

  const params = useParams()
  const gqlQuery = `query {
    getPokemon(pokemon: ${params.key}) {
      key
      types {
        name
      }
      baseStats {
        attack
        defense
        hp
        speed
      }
      abilities {
        first {
          name
          desc
        }
      }
      gender {
        male
        female
      }
    }
  }`;

  const gqlQueryArtwork = `query {
    pokemons(offset : 0, limit : 493) {
      results {
        name
        artwork
      }
    }
  }`

  //fetching information about pokemons
  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch('https://graphqlpokemon.favware.tech/v7', {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query : gqlQuery
        }),
        method: 'POST',
      })
      const data = await response.json()
      setPokemon(data.data.getPokemon)
    }
    fetchPokemon()
  }, [gqlQuery])

  //fetching artworks from another api
  useEffect(() => {
    async function fetchArtworks() {
      const response = await fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
        headers : { 'Content-Type': 'application/json' },
        body : JSON.stringify({
          query : gqlQueryArtwork,
          variables : {offset : 0, limit : 151}
        }),
        method : 'POST'
      })
      const data = await response.json()
      console.log(data)
      setPokemonArtwork(data.data.pokemons.results)
    }
    fetchArtworks()
  }, [gqlQueryArtwork])

  if(!pokemon.key) {return <h1>LOADING...</h1>}
  
  return (
      <PokemonDetail data={pokemon} artwork={pokemonArtwork}/>
  )
}

export default Pokemon;