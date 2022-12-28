import wrapPromise from "./wrapPromise"

// const gqlQuery = `query {
//     getPokemon(pokemon : charmander) {
//       key
//       sprite
//       types {
//         name
//       }
//     }
//   }`;

//   const gqlQueryPokemons = `query {
//     getAllPokemon(offset: 87, take: 229) {
//       key
//       sprite
//       types {
//         name
//       }
//     }
//   }`;

function fetchData(url, query) {
    const promise = fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query : query
        }),
        method: 'POST',
        })
        .then((res) => res.json())
        .then((res) => res.data)
    return wrapPromise(promise)
}

export default fetchData;