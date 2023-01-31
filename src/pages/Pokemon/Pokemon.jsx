import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetail from "../../components/PokemonDetail/PokemonDetail.jsx";
import Modal from "../../components/Modal/Modal.jsx";
import fetchPokemon from "../../api/fetchPokemonInfo.js";
import fetchArtworks from "../../api/fetchPokemonArtwork.js";
import catchPokemon from "../../api/catchPokemonPromise.js";
import { useCallback } from "react";

import { useMyPokemonsContext } from "../../common/context/MyPokemons.js";

function Pokemon() {
  const [pokemon,setPokemon] = useState({})
  const [pokemonArtwork, setPokemonArtwork] = useState([])
  const [isModalVisible, setModalVisibility] = useState(false)
  const [isPokemonCaptured, setCapturedPokemon] = useState(false)
  const {addPokemonToList} = useMyPokemonsContext()
  const params = useParams()

  //fetching information about pokemons
  useEffect(() => {
    const pokemon = async () => {
      const pokeInfo = await fetchPokemon(params)
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

  const handleModal = useCallback(() => {
    setModalVisibility((visibility) => visibility = !visibility)
  }, []) 

  useEffect(() => {
    if(isModalVisible && !isPokemonCaptured) {
      catchPokemon()
        .then((data) => {
          addPokemonToList(params)
          setCapturedPokemon(true)
          handleModal()
        })
        .catch((error) => {
          alert("Pokemon ran away")
          handleModal()
        })
    }
  }, [isModalVisible, addPokemonToList, params, isPokemonCaptured, handleModal])

  if(!pokemon.key) {return <h1>LOADING...</h1>}
  
  return (
      <>
        <PokemonDetail data={pokemon} artwork={pokemonArtwork} openModal={handleModal}/>
        <Modal visible={isModalVisible} handle={handleModal} captured={isPokemonCaptured} setCapturedPokemon={setCapturedPokemon}/>
      </>
  )
}

export default Pokemon;