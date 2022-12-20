import wrapPromise from "./wrapPromise"

const gqlQuery = `query {
    getPokemon(pokemon : charmander) {
      key
      sprite
      types {
        name
      }
    }
  }`;

function fetchData(url) {
    const promise = fetch(url, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query : gqlQuery
        }),
        method: 'POST',
        })
        .then((res) => res.json())
        .then((res) => res.data.getPokemon)
    return wrapPromise(promise)
}

export default fetchData;