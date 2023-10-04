export default function extractImportantData(pokemonPage: FullPokemonProps[]): Pokemon[] {
    const important: Pokemon[] = []
    pokemonPage.forEach((pokemon) => {
        const types = [] as string[]
        pokemon.types.forEach((type: PokemonType) => {
            types.push(type.type.name)
        })

        important.push({
            name: pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
            image: pokemon.sprites.front_default,
            id: pokemon.id,
            weight: pokemon.weight,
            height: pokemon.height,
            types: types,
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            special_attack: pokemon.stats[3].base_stat,
            special_defense: pokemon.stats[4].base_stat,
            speed: pokemon.stats[5].base_stat,
            species: pokemon.species.name[0].toUpperCase() + pokemon.species.name.slice(1),
            region: pokemon.region,
            generation: pokemon.generation
        })
    })

    
    return important
}
