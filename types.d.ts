type FullPokemonProps = {
    abilities: [
        { ability: [Object], is_hidden: boolean, slot: number },
        { ability: [Object], is_hidden: boolean, slot: number },
        { ability: [Object], is_hidden: boolean, slot: number }
    ],
    base_experience: number
    forms: [
        {
        name: string
        url: string
        }
    ],
    game_indices: [
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] },
        { game_index: number, version: [Object] }
    ],
    height: number
    held_items: []
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: [
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] },
        { move: [Object], version_group_details: [[]] }
    ],
    name: string
    order: number
    past_types: [],
    species: {
        name: string
        url: string
    },
    sprites: {
        back_default: string
        back_female: string | null,
        back_shiny: string
        back_shiny_female: string | null,
        front_default: string
        front_female: string | null,
        front_shiny: string
        front_shiny_female: string | null,
        other: {
        dream_world: [Object],
        home: [Object],
            'official-artwork': [Object]
        },
        versions: {
            'generation-i': [Object],
            'generation-ii': [Object],
            'generation-iii': [Object],
            'generation-iv': [Object],
            'generation-v': [Object],
            'generation-vi': [Object],
            'generation-vii': [Object],
            'generation-viii': [Object]
        }
    },
    stats: [
        { base_stat: number, effort: number, stat: [Object] },
        { base_stat: number, effort: number, stat: [Object] },
        { base_stat: number, effort: number, stat: [Object] },
        { base_stat: number, effort: number, stat: [Object] },
        { base_stat: number, effort: number, stat: [Object] },
        { base_stat: number, effort: number, stat: [Object] }
    ],
    types: PokemonType[],
    weight: number
    region: string
    generation: string
}



type PokemonType = {
    slot: number, 
    type: {
        name: string
        url: string
    }
}

type PokemonList = {
    show: Show
    pokemon: Pokemon
    index: number
}

type Show = {
    image: boolean
    weight: boolean
    height: boolean
    types: boolean
}

type ReduxState = {
    pokemon: {
        pokemon: number
        pokemonList: Pokemon[]
        show: {
            image: true,
            weight: true,
            height: true,
            types: true
        }
        count: number
    }
}

type Pokemon = {
    name: string
    id: number
    image: string
    weight: number
    height: number
    types: string[]
    hp: number
    attack: number
    defense: number
    special_attack: number
    special_defense: number
    speed: number
    species: string
    region: string
    generation: string
}
