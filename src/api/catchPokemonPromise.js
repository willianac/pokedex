const generateRandom = () => {
    return Math.floor(Math.random() * 100)
  }

function catchPokemon() {
     return new Promise((resolve, reject) => {
        const percentage = generateRandom()
        console.log(percentage)
        setTimeout(() => {
            if(percentage >= 30) {
                resolve(true)
            } 
            reject(false)
        }, 3000)
    })
}

export default catchPokemon;