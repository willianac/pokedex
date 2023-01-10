const gqlQueryArtwork = `query {
    pokemons(offset : 0, limit : 493) {
      results {
        name
        artwork
      }
    }
  }`

export default async function fetchArtworks() {
    const response = await fetch('https://graphql-pokeapi.vercel.app/api/graphql', {
      headers : { 'Content-Type': 'application/json' },
      body : JSON.stringify({
        query : gqlQueryArtwork,
        variables : {offset : 0, limit : 151}
      }),
      method : 'POST'
    })
    const data = await response.json()
    return data.data.pokemons.results
}