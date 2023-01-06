export const gqlQueryFirstGen = `query {
  getAllPokemon(offset: 88, take: 232) {
    key
    sprite
    types {
      name
    }
  }
}`;

export const gqlQuerySecondGen = `query {
  getAllPokemon(offset: 320, take: 113) {
    key
    sprite
    types {
      name
    }
  }
}`

export const gqlQueryThirdGen = `query {
  getAllPokemon(offset: 433, take: 165) {
    key
    sprite
    types {
      name
    }
  }
}`

export const gqlQueryFourthGen = `query {
  getAllPokemon(offset: 598, take: 124) {
    key
    sprite
    types {
      name
    }
  }
}`