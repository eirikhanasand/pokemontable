import getRegion from "./getRegion"

/**
 * Fetches and returns information about 50 or a user defined amount of pokemon,
 * which make up one page of the table.
 */
export default async function fetchAllPokemon() {
    let pokemon: FullPokemonProps[] = []

    // Fetches all 1017 pokemon available in Pokeapi
    for (let i = 1; i <= 1017; i++) {
        const response = await fetchPokemon(i)
        const region = getRegion(i)

        if (response) {
            pokemon.push({...response, ...region})
        }
    }

    return pokemon
}

/**
 * Fetches and returns information about a specific pokemon
 * @param id ID of the pokemon to fetch
 * @returns Pokemon data
 */
async function fetchPokemon(id: number): Promise<FullPokemonProps | undefined> {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        
        if (!response.ok) {
            throw new Error(`Failed to fetch pokemon ${id}.`)
        }
        
        return response.json()
    } catch (error) {
        console.log(error)
        return undefined
    }
}
