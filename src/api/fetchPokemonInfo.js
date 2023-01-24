export default async function fetchPokemon(params) {
    const gqlQueryData = `query {
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

    const gqlQueryMoves = `query {
      pokemon(name: "${params.key}") {
        moves {
          move {
            name
          }
        }
      }
    }`

    const movesResponse = await fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
      headers : { 'Content-Type': 'application/json' },
      body : JSON.stringify({
        query : gqlQueryMoves
      }),
      method : 'POST'
    })
    const moves = await movesResponse.json();

    let moveList;
    if(moves.data.pokemon.moves) {
      moveList = await moves.data.pokemon.moves.map((move) => {
        return move.move.name
      })
    }

    const dataResponse = await fetch('https://graphqlpokemon.favware.tech/v7', {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query : gqlQueryData
      }),
      method: 'POST',
    })
    const data = await dataResponse.json()

    return {
      ...data.data.getPokemon, moveList
    }
}