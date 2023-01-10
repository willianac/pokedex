export default async function fetchPokemon(params) {
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


    const response = await fetch('https://graphqlpokemon.favware.tech/v7', {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query : gqlQuery
      }),
      method: 'POST',
    })
    const data = await response.json()
    return data.data.getPokemon
}